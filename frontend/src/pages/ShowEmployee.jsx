import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Snipper from "../components/Spinner";

const ShowEmployee = () => {
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Employee Details</h1>
      {loading ? (
        <Snipper />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 items-start">
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Unique ID</span>
            <span>{employee._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Name</span>
            <span>{employee.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Email</span>
            <span>{employee.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Phone</span>
            <span>{employee.phone}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Designation</span>
            <span>{employee.designation}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Gender</span>
            <span>{employee.gender}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Course</span>
            <span>{employee.course}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Created At</span>
            <span>{new Date(employee.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-600">Last Updated</span>
            <span>{new Date(employee.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEmployee;

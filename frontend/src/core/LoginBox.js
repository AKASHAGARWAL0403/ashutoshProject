import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../HistoryContainer/History";
import axios from "axios";

export default function LoginTable() {
  const [departmentId, setDepartmentId] = useState(null);
  const [departmentPassword, setDepartmentPassword] = useState(null);

  const handleClick = () => {
    console.log(departmentId);
    var apiUrl = "http://localhost:5000/department/verifyDesignation";
    console.log(departmentPassword);
    axios.post(apiUrl,{ 
        id: departmentId,
        password: departmentPassword
      })
    .then((repos) => {
        console.log(repos);
      if(repos.data['exist'] && repos.data['password']){
        sessionStorage.setItem("department" , departmentId);
        history.push("/department");
        window.location.reload();
      }
      else if(repos.data['exist'] && repos.data['password'] == false){
        alert("Wrong Password for Department Id " + departmentId);
      }
    else{
        alert("No department with id " + departmentId);
      }
    });
    
  }
  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        onChange={(event) => {
          setDepartmentId(event.target.value);
        }}
        label="Enter Your Department Id"
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        onChange={(event) => {
          setDepartmentPassword(event.target.value);
        }}
        label="Enter Your PassWord"
        type="password"
        fullWidth
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClick}
        // value={row.emp_no}
      >
        Submit
      </Button>
    </div>
  );
}

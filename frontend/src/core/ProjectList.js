import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProjectList() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/employee/";
    axios.get(apiUrl).then((repos) => {
      console.log(repos);
      setMainTableRows(repos.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell align="center">
                <a href="/department/cse">Computer Science</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="/department/ece">Electronics and Communication</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Chemical Engineering</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Mechanical Engineering</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Mining Engineering</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Electrical Engineering</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Mathematics Computing</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Earth Science</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Environmental Engineering</a>
              </TableCell>  
            </ TableRow>
            <TableRow>
              <TableCell align="center">
                <a href="#">Civil Engineering</a>
              </TableCell>  
            </ TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const staticData = {
  "cse" : [{
    "id" : 1 , 
    "professor" : "Prof Chiranjeev Kumar" , 
    "cost" : "10000",
    "jrf" : "S. Sahoo",
    "description" : "Research Project data"
  }, 
  {
    "id" : 2 , 
    "professor" : "Soumen Bag" , 
    "cost" : "10000",
    "jrf" : "Amit Kumar",
    "description" : "Regarding Bilingual Digit Recognition"
  }],
  "ece" : [{
    "id" : 1 , 
    "professor" : "Rajiv Ranjan" , 
    "cost" : "10000",
    "jrf" : "Shivam Kumar",
    "description" : "BJT Analysis"
  }, 
  {
    "id" : 1 , 
    "professor" : "A. Kumar" , 
    "cost" : "10000",
    "jrf" : "Shivam Khan",
    "description" : "Corona Detector"
  }]
  
}

export default function ProjectPage({match}) {

  const classes = useStyles();
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Id</TableCell>
            <TableCell align="right">Professor</TableCell>
            <TableCell align="right">Cost of Project</TableCell>
            <TableCell align="right">Research Fellow</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staticData[match.params.department].map((value , key ) => (
          <TableRow key={value.id}>
          <TableCell component="th" scope="row">
            {value.id}
          </TableCell>
          <TableCell align="right">{value.professor}</TableCell>
          <TableCell align="right">{value.cost}</TableCell>
          <TableCell align="right">{value.jrf}</TableCell>
          <TableCell align="right"><a href="https://drive.google.com/">{value.description}</a></TableCell>
          </TableRow>
		  ))} 
           
        </TableBody>
      </Table>
    </TableContainer>
  );
}

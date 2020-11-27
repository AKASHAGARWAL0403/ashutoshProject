import { DepartmentDetails } from "../../models/Department";
import { Sequelize } from "sequelize";
const Op = Sequelize.Op;
const excel = require("exceljs");


exports.verifyDepartmentDetails = (req , res) => {
  const id = req.body.id;
  const password = req.body.password;
  DepartmentDetails.findOne({
    where: {department : id},
  })
    .then((data) => {
      console.log(data);
      var obj = {
        exist : false,
        password : false
      };
      if(data != null && data.password == password){
        obj['exist'] = true;
        obj['password'] = true;
      }
      else if(data != null){
        obj['exist'] = true;
        obj['password'] = false;
      }
      res.status(200).send(obj);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id,
      });
    });
}


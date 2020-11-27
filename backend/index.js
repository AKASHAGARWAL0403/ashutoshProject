import { Connect, getSequelize, syncDatabase } from "./db/ConnectDatabase";
import { initDepartmentDetails } from './models/Department';
import express from "express";
import bodyParser from "body-parser";
import DepartmentRouter from './api/Department/router';

import { Database } from "./db/Database";
const cors = require("cors");

(async () => {
  await Connect(() => {
    console.log("Connection Has been establshed");
  });

  const sequelize = getSequelize();
  Database.setSequelize(sequelize);

  await initDepartmentDetails(sequelize);

  await syncDatabase();

  const app = express();

  app.use(bodyParser.json({ extended: false }));

  var corsOptions = {
    origin: "http://localhost:3000",
  };
  
  app.use(cors(corsOptions));

  app.use("/department" , DepartmentRouter);


  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });


  

})();

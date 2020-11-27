const express = require('express');
const router = express.Router();
const department = require('./repository');

router.post("/verifyDesignation" , department.verifyDepartmentDetails);


module.exports = router;
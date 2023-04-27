const express = require("express");
const con=require('../config/dbConn')

const data =async (req, res) => {

  console.log(req.body)
    con.query(`insert into propertyviewreport (propertyNo,clientNo,dateofView,comments)
    values ('${req.body.propertyNo}','${req.body.ClientID}','${req.body.Date}','${req.body.comment}')`,(error,result,fields)=>{
      if(error)
      {
        console.log(error)
        res.json({mssg:"FAILED"})
      }
      else{
        res.json({mssg:"SUCCESS"})
      }
    })
  }

module.exports = { data };

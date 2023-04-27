const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  const {leasenumber,clientnumber,monthlyrent,paymentmethod,propertynumber,rentstart,duration,units,depositpaid,rentend}=req.body
  const dateObj2 = new Date(rentstart);
    const mysqlDate2 = dateObj2.toISOString().slice(0, 10);
    const dateObj3 = new Date(rentend);
    const mysqlDate3 = dateObj3.toISOString().slice(0, 10);
  console.log(req.body)
    con.query(`insert into Lease values ('${leasenumber}','${clientnumber}','${propertynumber}',
    '${mysqlDate2}',${duration},'${units}',${monthlyrent},'${paymentmethod}','${depositpaid}','${mysqlDate3}')`,(error,result,fields)=>{
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

module.exports = { reg };

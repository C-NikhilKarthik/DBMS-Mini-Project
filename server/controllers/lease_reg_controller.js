const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  const {leasenumber,clientnumber,monthlyrent,paymentmethod,propertynumber,rentstart,duration,units,depositpaid}=req.body
  const dateObj2 = new Date(rentstart);
    const mysqlDate2 = dateObj2.toISOString().slice(0, 10);
  console.log(req.body)
    con.query(`insert into Lease(leaseNo, clientNo, propertyNo, rentStartDate, duration, units,
       rentPerMonth, paymentMethod, depositPaid) 
    values ('${leasenumber}','${clientnumber}','${propertynumber}',
    '${mysqlDate2}',${duration},'${units}',${monthlyrent},'${paymentmethod}','${depositpaid}')`,(error,result,fields)=>{
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

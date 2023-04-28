const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
    const {adId,propertynum,medium,datead,price}=req.body
    const dateObj = new Date(datead);
    const mysqlDate = dateObj.toISOString().slice(0, 10);
  console.log(req.body)

    con.query(`insert into Adds values (${adId},'${propertynum}','${mysqlDate}','${medium}',${price})`,(error,result,fields)=>{
      if(error)
      {
        console.log(error)
        res.json({mssg:"FAILED"})
      }
      else{
        res.json({mssg:"WORKED"})
      }
    })
};



module.exports = {reg};

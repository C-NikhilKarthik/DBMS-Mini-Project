const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  const {propertynum,type,rooms,rent,ownerid,streetaddress,city,postalcode,managedby,ImageUrl}=req.body
  console.log(req.body)
  
    con.query(`insert into Properties values ('${propertynum}','${ImageUrl}','${type}',${rooms},
    ${rent},'${streetaddress}','${city}','${postalcode}','${managedby}');
    insert into PropertyOwners values('${propertynum}','${ownerid}')`,(error,result,fields)=>{
      if(error)
      {
        console.log(error)
        res.json({mssg:"FAILED"})
      }
      else{
        res.json({mssg:"SUCCESS"})
      }
    })
};



module.exports = { reg };

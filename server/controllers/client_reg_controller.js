const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  const {selectedDate,clientnum,clientName,clientReqType,clientMaxRent,clientBranchno,clientStaffReg,clientcontact}=req.body
  console.log(req.body)

  const nameArr = clientName.split(" ");
  const fname= nameArr[0];
  const lname = nameArr[nameArr.length - 1];
  const dateObj = new Date(selectedDate);
  //const mysqlDate = dateObj.toISOString().slice(0, 19).replace('T', ' ');
  const mysqlDate = dateObj.toISOString().slice(0, 10);
  //console.log(mysqlDate)

  
    con.query(`insert into Clients values ('${clientnum}','${lname}','${fname}',
    ${clientMaxRent},'${clientBranchno}','${clientStaffReg}','${mysqlDate}');
    insert into ClientPhoneNo values ('${clientnum}','${clientcontact}');
    insert into ClientRequirement values ('${clientnum}','${clientReqType}')`,(error,result,fields)=>{
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

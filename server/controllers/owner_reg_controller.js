const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  const {ownernumber,name,telephonenumber,typeofbusiness,streetaddress,city,postalcode,contactname}=req.body
  console.log(req.body)

  const nameArr = name.split(" ");
  const fname= nameArr[0];
  const lname = nameArr[nameArr.length - 1];

  if(contactname!=='')
  {
  const contact_nameArr = contactname.split(" ");
  const contact_fname= contact_nameArr[0];
  const contact_lname = contact_nameArr[contact_nameArr.length - 1];
  
    con.query(`insert into Owner values ('${ownernumber}','${lname}','${fname}',
    '${streetaddress}','${city}',${postalcode},'${telephonenumber}','${typeofbusiness}','${contact_lname}','${contact_fname}');
    insert into OwnerPhoneNo values ('${ownernumber}','${telephonenumber}')`,(error,result,fields)=>{
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
  else{
    console.log("null part")
    con.query(`insert into Owner values ('${ownernumber}','${lname}','${fname}',
    '${streetaddress}','${city}','${postalcode}','${telephonenumber}',${null},${null},${null})`,(error,result,fields)=>{
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
};

module.exports = { reg };

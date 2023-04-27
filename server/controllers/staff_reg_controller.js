const express = require("express");
const con=require('../config/dbConn')

const reg =async (req, res) => {
  console.log(req.body)

  const nameArr = req.body.fullname.split(" ");
  const fname= nameArr[0];
  const lname = nameArr[nameArr.length - 1];
  
  const dateObj = new Date(req.body.dob);
  const mysqlDate = dateObj.toISOString().slice(0, 10);

  if(req.body.position==='Manager')
  {
    if(req.body.managerstartdate===null || req.body.managerbonus===0)
    {
        res.json({mssg:"FAILED"})
    }
    else{
        const dateObj2 = new Date(req.body.managerstartdate);
        const mysqlDate2 = dateObj2.toISOString().slice(0, 10);
        con.query(`insert into Staff(staffNo,branchNo,lname,fname,sex,dob,position,salary,mgrStartDate,mgrBonus) 
        values('${req.body.staffnumber}','${req.body.branchno}','${lname}','${fname}','${req.body.sex}',
        '${mysqlDate}','${req.body.position}',${req.body.salary},'${mysqlDate2}',
        ${req.body.managerbonus});
        insert into BranchMgrs values('${req.body.branchno}','${req.body.staffnumber}') `,(error,result,fields)=>{
            if(error)
            {
                console.log(error)
                res.json({mssg:"FAILED"})
            }
            else{
                res.json({mssg:"WORKED"})
            }
        })
    }
}
else if(req.body.position==='Assistant'){
    con.query(`insert into staff(staffNo,branchNo,lname,fname,sex,dob,position,salary,supervisorNumber) 
    values('${req.body.staffnumber}','${req.body.branchno}','${lname}','${fname}','${req.body.sex}',
        '${mysqlDate}','${req.body.position}',${req.body.salary},'${req.body.supervisornum}'
        )`,(error,result,fields)=>{
            if(error)
            {
                console.log(error)
                res.json({mssg:"FAILED"})
            }
            else{
                res.json({mssg:"WORKED"})
            }
        })

}
else{
    con.query(`insert into staff(staffNo,branchNo,lname,fname,sex,dob,position,salary) 
    values('${req.body.staffnumber}','${req.body.branchno}','${lname}','${fname}','${req.body.sex}',
        '${mysqlDate}','${req.body.position}',${req.body.salary})`,(error,result,fields)=>{
            if(error)
            {
                console.log(error)
                res.json({mssg:"FAILED"})
            }
            else{
                res.json({mssg:"WORKED"})
            }
        })

}
};

module.exports = { reg };

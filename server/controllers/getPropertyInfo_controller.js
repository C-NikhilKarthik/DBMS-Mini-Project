const express = require("express");
const con=require('../config/dbConn')

const data = async (req, res) => {
    con.query('select * from Properties', (error, result, fields) => {
      if (error) {
        console.log(error)
        res.json({ mssg: "FAILED" })
      } else {
        console.log(result)
        res.json(result)
      }
    })
  }

  module.exports = {data};

const mysql=require('mysql')
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"avisql@123",
    database:"dreamhome",
    multipleStatements:"true"
})

// Check if the connection is established successfully
con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  
module.exports=con
const mysql=require('mysql')
const con=mysql.createConnection({
    host:"sql12.freemysqlhosting.net",
    user:"sql12614486",
    password:"CdAQzTWKhF",
    database:"sql12614486",
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
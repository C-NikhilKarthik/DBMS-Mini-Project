import mysql.connector

# Connect to the database
cnx = mysql.connector.connect(user='sql12614486', password='CdAQzTWKhF',
                              host='sql12.freemysqlhosting.net',
                              database='sql12614486',
                              port='3306')

# Perform some queries
cursor = cnx.cursor()
query = "select * from Staff"
cursor.execute(query)
rows = cursor.fetchall()
print(rows)
# Close the connection
cnx.close()

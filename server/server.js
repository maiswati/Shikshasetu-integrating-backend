import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db1 = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'MrunCS@18',
    database:'shikshasetu_verification'
})

const db2 = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'MrunCS@18',
    database:'government'
});

db1.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

app.post('/applicants',(req,res)=>{
    const sql = "INSERT INTO applicants1 (applicant_name,username,email,password) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.applicantName,
        req.body.userName,
        req.body.email,
        req.body.password
    ]
    db1.query(sql, [values], (err,result)=>{
        if(err) {
            console.error("Error executing Mysql query", err);
            return res.json(err);
        }
        return res.json(result);
    })
})

app.post('/login',(req,res)=>{
    
})


app.listen(8000,()=>{
    console.log("App is listening on port 8000");
})
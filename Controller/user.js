const mysql = require('mysql');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');



require('dotenv').config();


//connection pool

let connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// connect to database

connection.getConnection((err) =>{
if (err){
    console.error('Erroro connecting to my sql:' +err.stack)
    return;
}
console.log('Connected to my sql as id' + connection.threadId)
connection.release();
});


// add feedback to my sql


router.post('/feedback',  (req, res) => {
    const { email, comment } = req.body;
    connection.query('INSERT INTO feedback (email,comment) VALUES (? , ?)' , [email,comment], (error,results)=>{
        if(error){
            console.error(error);
            return res.status(500).json({message:'Error creating feedback'});
        }
        res.status(201).json({message: 'Feedback created successfully'});
    });
    });
    // get feedback from MySQL

    router.get('/feedback' , (req , res) => {
        connection.query('SELECT * FROM feedback' , (error , results) =>{
            if(error) {
                console.error(error);
                return res.status(500).json({message:"There was an error getting the data"});
            }
            res.json(results)
        });
    });
    


/////////////////////////////////////////////////////////////////////////////////////////////////

//authentification 




exports.register = (req, res)=>{
    console.log(req.body);
    const name = req.body.name; //depends on its name on front
    const email = req.body.email;
    const password = req.body.password ;
    const passwordConfirm  = req.body.passwordConfirm;
    const number = req.body.number;
    //const {name , email , password, passwordConfirm} = req.body ;
    connection.query('SELECT email FROM users WHERE email = ?' , [email] , async (error,results)=>{
        if(error){
            console.log(error);
        }
        
        if(results.length>0){
            //return front page
            return res.render('register' , {
                message : 'that email is already in use'
            })
        }else if (password !== passwordConfirm){
            return res.render('register' , {
                message : 'passwords do not much' ,
            })
        }
        try{ hashedPassword = await bcrypt.hash(password , 8);//we hash our password 8 rounds and its so secure 
        console.log(hashedPassword);
         } catch (error){
            console.log('Error hashing password:', error);
            // handle the error appropriately , return an error response to the client
         }
        connection.query('INSERT INTO users SET ?' ,{name:name , email:email , password: hashedPassword} , (error,results)=>{
            if(error){
                console.log(error)
            }else{
                return res.render('register' , {
                    message : 'user regestered',
                });
            }
        })

    });
    
}
//send to admin 





















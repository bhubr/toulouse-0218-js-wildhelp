const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')
const session = require('express-session')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(session({secret:"cats", resave:true, saveUninitialized: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const checkUser = (req,res,next) => {
  if(req.session !==undefined &&
     req.session.user !==undefined
   ){
     //user connecté
     const user = req.session.user
     next()
   }
   else {
     res.status(401).json({
       error: 'Accès non autorisé'
     })
   }
}
app.get(
  '/connexion',
  checkUser,
  (req,res)=>{
    res.send('/requete')
  }
)

const checkLoggedInUser = (req,res) => {
  const {email, password} = req.body
  console.log(req.body)
  if (!email || !password){
    return res.status(400).json({error: 'Champs non remplis'})
  }

  if (email == checkLoggedInUser.email && password !== checkLoggedInUser.password) {
    return res.status(401).json({error: 'Mauvais mot de passe'})
  }


  const userConnexion = `SELECT * FROM user WHERE email='${req.body.email}' AND password='${req.body.password}'`

  req.session.user = checkLoggedInUser
  // res.json(checkLoggedInUser)

  connection.query(userConnexion, (error, results, fields) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(results[0])
  })
}
module.exports = checkLoggedInUser

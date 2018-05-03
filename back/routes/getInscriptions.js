const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')

const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
const champsObligatoires = ['name', 'surname', 'password', 'email']


const getInscriptions =  (req, res) => {
  console.log(req.body)
  for (champ of champsObligatoires){
    if(! req.body[champ]){
      return res.status(400).json({
        error: 'champs non remplis !'
      })
    }
  }

  for (champ['password'] of champsObligatoires){
    if( req.body.password.length < 6 ){
      return res.status(400).json({
        error: 'mot de passe trop court !'
      })
    }
  }

  for (champ['name'] of champsObligatoires){
    if( req.body.name.length < 2 || req.body.name.length > 25  ){
      return res.status(400).json({
        error: 'Nombre de caractères de nom requis incorrect !'
      })
    }
  }

  for (champ['surname'] of champsObligatoires){
    if( req.body.surname.length < 2 || req.body.surname.length > 25  ){
      return res.status(400).json({
        error: 'Nombre de caractères de prenom requis incorrect !'
      })
    }
  }

  if(! regex.test(req.body.email)) {
    return res.status(400).json({
      error: 'email incorrect !'
    })
  }

  const given = mysqlEscape(req.body['name'])
  const family = mysqlEscape(req.body['surname'])
  const current = mysqlEscape(req.body['password'])
  const email = mysqlEscape(req.body['email'])
  const accountType = mysqlEscape(req.body['accountType'])

  const selectUser = `INSERT INTO user (name, surname, password, email, accountType) VALUES ('${given}', '${family}', '${current}', '${email}', '${accountType}')`

  connection.query(selectUser, (error, results, fields) => {
    if(error) {
      console.error(error)
      return res.status(500).json({
        error: ('Email déjà enregistré, vérifiez votre adresse ou connectez vous via la page connexion !')
      })
    }
    console.log(results)
    res.json({results})
  })
}


module.exports = getInscriptions

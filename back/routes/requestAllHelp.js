const  connection = require('../db')

const requestCourse= []
let id = 1

const requestAllHelp = (req, res) => {
  console.log(req.body)
  const technoId = req.body.langage
  const topic = req.body.topic
  const description = req.body.description

  if(description.length < 30) {
    return res.status(400).json({
      error: 'Description trop court (30 caractères minimum)'
    })
  }

    const userId = 3
    const request = `INSERT INTO wildRequest (userId, technoId, topic, description ) VALUES (${userId}, ${technoId}, '${topic}', '${description}' )`
    

  connection.query(request, (error, results) => {
    // if (error) throw error
    if(error) {
      return res.status(500).json({
        error: error.message
        })
    }
    console.log(results)
    const topic = results[0]
    res.json( {results: results[0]})
  })
}

module.exports = requestAllHelp

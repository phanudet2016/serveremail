const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var nodemailer = require('nodemailer')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var new_post
var email
var text
console.log("The message was sent!");
app.post('/add_post', (req, res) => {
	var title = req.body.title;
  var description = req.body.description;
  email = req.body.title
  text = description = req.body.description;
  new_post = [{
      title: title,
      description: description
  }]
  // sendEmail();
})

function sendEmail() {
    // sendEmail
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: '5706021622141@fitm.kmutnb.ac.th',
        pass: '08486787bg'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    let HelperOptions = {
      from: '"Beer" <5706021622141@fitm.kmutnb.ac.th>',
      to: email,
      subject: '555',
      text: text
    };
    
    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
    })
}
// endSendEmail
app.get('/posts', (req, res) => {
  res.send(new_post)
})

app.listen(process.env.PORT || 8081)

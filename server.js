// require is common JS
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

if(process.env !== 'production') require ('dotenv').config()
// if we are in development
// require in dotenv
// process env can now access it
// looks for .env in root

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// gives us back function with stripe secret key
// as the first parameter

const app = express();
// express is just a library of node

const port = process.env.PORT || 5000;
// localhost on 3000
// server on 5000

app.use(bodyParser.json())
// process all requests to JSON
app.use(bodyParser.urlencoded({extended:true}))
// url encoded: strings we're passing in dont
// have percentages, etc

app.use(cors())
// allow us to make requests from localhost 3000
// to localhost 5000

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'client/build')))
    // static allows us to serve certain file inside 
    // of this path we pass
    // __dirname tells us what path we're in
    app.get('*',function(req,res){
    // how we tell our app what our REST PARAMS are
    // get requests 
        res.sendFile(path.join(__dirname,'client/build','index.html'))
    })
}

app.listen(port,err =>{
    if(err) throw err;
    console.log('server running on port ' + port)
})

app.post('/payment', (req,res) => {
    // req will provide us the token
    // we get from the stripe token
    // https://www.npmjs.com/package/stripe
    const body = {
        source: req.body.token.id,
        // getting the token ID from the body
        // on the front end
        amount: req.body.amount,
        currency:'usd'
    }

    stripe.charges.create(body,(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).send({error:stripeErr})
        } else{
            res.status(200).send({success:stripeRes})
        }
    })
})
//Slide 39-Dynamic Params

const express = require("express");
const router = express.Router();

const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hipkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
   
]
    
// Dynamic request param endpoint - get the user matching
    
    router.get('/:id', (req, res) => {
    console.log(req.params)

    //Slide 40-Request headers

    router.get('/:id',(req, res) => {
        console.log(req/headers)

        res.json(req.headers)
    })

    // Slide 41-Request Body

    router.post('/',(req,res)) => {
    let userId = req.params.id
    
    let user = users.find(user => user.id == userId)

    user ? res.status(200).json({result: user})  : res.status(404).json({result:`User ${userId} not found`})
   
     })
   
     module.exports = router;
    
    In this example we are adding support for a
    dynamic request parameter representing a
    user id.
    When we send a request such as
    http://localhost/users/3, the ‘3’ is dynamically
    matched against this route, and stored in a
    param called id. Try it out using different ids!
    Dynamic Params
    
    // import all user routes (up top in index.js)
    const userRoutes = require('./routes/userRoutes');
    // map the user routes to our app
    app.use('/users', userRoutes);
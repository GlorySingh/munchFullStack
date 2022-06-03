const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// MONGOOSE SPECS
// mongoose.connect('mongodb://localhost:27017/contacts', {useNewUrlParser: true, useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('we are connected');
// });

// let bookSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     num: Number
// });

// let bookModel = mongoose.model('contact', bookSchema);

// EXPRESS SPECS
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// PUG SPECS
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// END POINTS
app.get('/',(req,res) => {
    res.status(200).render('index.pug');
})

app.get('/contact',(req,res) => {
    res.status(200).render('contact.pug');
})

app.get('/menu',(req,res) => {
    res.status(200).render('menu.pug');
})
// app.post('/contact',(req,res) => {
//     let contactData = new bookModel(req.body);
//     contactData.save().then(() => {
//         res.send('This has been saved to the database.');
//     }).catch(() => {
//         res.status(400).send("Item was not saved to the database.")
//     })
// })

//START THE SERVER
app.listen(port,() => {
    console.log(`Success at port ${port}.`);
})
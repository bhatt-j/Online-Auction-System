const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const dbURI = 'mongodb+srv://auction12:auction12@cluster0.bw0ms.mongodb.net/online-auction?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log('connected to DB')
    app.listen(3000, () => console.log("server running at port 3000"));
})
.catch((err) => {
    console.log(err)
})

app.use(express.json());

const adminRouter = require('./routes/adminRoute');
app.use('/admin',adminRouter);

const walletRouter = require('./routes/walletRoute');
app.use('/wallet',walletRouter);


const transactionRouter = require('./routes/transactionRoute');
app.use('/transaction',transactionRouter);

const categoryRouter = require('./routes/categoryRoute');
app.use('/category',categoryRouter);

const chatRouter = require('./routes/chatRoute');
app.use('/chat',chatRouter);

const auctionRouter = require('./routes/auctionRoute');
app.use('/auction',auctionRouter);

const userRouter = require('./routes/userRoute');
app.use('/user', userRouter);

const productRouter = require('./routes/productRoute');
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.render('index');
})

/* app.get('/add-user', (req, res) => {
    res.render('addUser');
})

app.post('/add-user', (req, res) => {
    
}) */

/* app.get('/users', (req, res) => {
    User.find()
    .then((result) => {
        res.render('users', { users: result });
    })
    .catch((err) => {console.log(err)})
}) */
/* 
app.get('/find-user', (req, res) => {
    res.render('findUser')
})

app.post('/find-user', (req,res)=> {
    console.log(req.body.aadharNumber)
    User.find({'aadharNumber': req.body.aadharNumber}, (err, docs) => {
        res.send(docs)
        
    })
})

app.get('/remove-user', (req, res) => {
    res.render('removeUser')
})

app.post('/remove-user', (req, res) => {
    console.log(req.body.aadharNumber)
    User.deleteOne( { aadharNumber: req.body.aadharNumber } )
    .then(
        res.send("User Deleted")
    )
}) */




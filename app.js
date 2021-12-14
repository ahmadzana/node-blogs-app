const { timeStamp } = require('console');
const express = require('express');
const fs = require('fs') ;
const mongoose = require('mongoose') ;
const methodOverride = require('method-override') ;
const app = express();
const blogRouter = require('./routes/blogRoutes');

//connect to mongoDB
const PORT = 8000;
const dbURI = 'mongodb+srv://ahmadzana:ahmadkurdistan@myapp.vberm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.listen(PORT,
()=>{console.log(`server running on port: ${PORT}`)});

mongoose.connect(dbURI).then((result)=> {console.log('DB connected')}).catch((err)=>console.log('error connecting to db',err ));

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.json());


app.get('/',(req,res)=>{
  res.redirect('blogs' );
})
app.get('/blogs/create',(req,res)=>{
  res.render('blogs/create');
})

app.use('/blogs',blogRouter);

app.get('/about',(req,res)=>{
  res.render('about');
})


app.use((req,res)=>{
    res.status(404).render('404')
})

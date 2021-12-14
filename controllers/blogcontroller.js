const Blog = require('../models/blog');



const blog_index = async (req,res,next) => {
    await Blog.find().sort({createdAt: -1})
    .then((result)=>{
      res.render('index',{title: 'my blogs',blog: result})
    }).catch(err=>{
      console.log(err);
      next();
    })
}

const blog_post = async (req,res,next)=>{
    let blog = await new Blog(req.body);
     blog.save()
    .then((result)=>{res.redirect('blogs') })
    .catch((err)=>{
      redirect('blogs' , {blog});
      next();
  })
  
}
const blog_edit_post =  async (req,res, next)=>{

  let blog = await Blog.findById(req.params.id);
  blog.title = req.body.title ;
  blog.snippet = req.body.snippet;
  blog.body = req.body.body;
  blog.save()
  .then((result)=>{
    res.redirect('/')
  })
  .catch(err=>{console.log(err)})

  
}
const blog_result = async (req,res,next)=>{
    let id = req.params.id;
   await Blog.findById(id).then((result)=>{
      res.render('blogs/blog',{blog: result})
    }).catch((err)=>{
      console.log(err); 
      next();
    })
  }

const blog_delete = async (req,res,next)=>{
    let id = req.params.id;
    await Blog.findByIdAndDelete(id)
    .then( (result)=>{
      res.redirect('/blogs')
    }  )
    .catch(err=>{
      console.log(err);
       next();
    })
  }

  const blog_edit = async (req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('blogs/edit',{blogs: blog})
  
}

 

const blog_create_get = (req,res)=>{
    res.render('blogs/create');
  }



module.exports = {
    blog_index,
    blog_post,
    blog_result,
    blog_delete,
    blog_create_get,
    blog_edit,
    blog_edit_post,
}
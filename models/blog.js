const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const marked = require('marked');
const createDomPurify = require('dompurify');

const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window);


const blogSchema = new Schema({
    title:{
        type: String ,
        required:true
    },
    snippet:{
        type: String ,
        required: true
    },
    body:{
        type: String,
        required:true
    }

},{timestamps: true});


if(this.markdown){
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
}

const Blog = mongoose.model('Blog' , blogSchema);
module.exports = Blog ;
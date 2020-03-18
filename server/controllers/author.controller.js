const Author = require("../models/author.model");

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
      .then(newAuthor => res.json(newAuthor))
      .catch(err => res.json(err));
    
};
module.exports.showAllAuthors = (req,res) => {
  Author.find()
    .then(allAuthors=>res.json(allAuthors))
    .catch(err=>res.json(err));
    
};

module.exports.showOneAuthor = (req,res)=> {
  Author.findById({_id:req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err));
    
};

module.exports.editAuthor = (req,res) => {
  Author.findByIdAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .then(author => res.json(author))
}

module.exports.deleteAuthor = (req,res) => {
  Author.findByIdAndDelete({_id:req.params.id})
    .then(result=>res.json(result))
}
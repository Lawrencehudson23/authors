const Author = require("../models/author.model");

module.exports.createAuthor = (req,res) => {
  const {name} = req.body;
  Author.create({
    name
  })
      .then(newAuthor => res.json(newAuthor))
      .catch(err => res.status(400).json(err));
    
};
// '_'  is placeholder
module.exports.showAllAuthors = (_,res) => {
  Author.find()
    .then(allAuthors=>res.json(allAuthors))
    .catch(err=>res.status(400).json(err));
    
};

module.exports.showOneAuthor = (req,res)=> {
  Author.findById({_id:req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
    
};

module.exports.editAuthor = (req,res) => {
  Author.findByIdAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .then(author => res.json(author))
    .catch(err=> res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) => {
  Author.findByIdAndDelete({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json(err))
}
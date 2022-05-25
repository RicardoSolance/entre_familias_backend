
const user_forum = require("../models/user_forum");
const jwt=require("jsonwebtoken")

const createForum = async (req, res) => {
    try {
      console.log("llega front pregunta");
      const foro = await new user_forum(req.body);
      // console.log(token);
      console.log(req.headers);
      const token=req.headers.authorization.split(" ")[1]
      foro.set("postedBy",(req.payload._id))
       await foro.save() 
      
      res.status(200).send(token);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
  const getForums = async (req, res) => {
  
    try {
      const forum = await user_forum.find({}).populate("postedBy")
      
     
      res.status(200).send(forum);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateForum = async (req, res) => {
  
    try {
      
      // const datacomment = req.params.comment;
      console.log("marcelo",req.params.comment);
      console.log("diego",req.params.id);
      console.log(req.body);
      const foro = await user_forum.findById(req.params.comment );
      
      Object.assign(foro,  { $push: { comments: req.body }
        })
     
      foro.save();
      res.status(200).send({ message: "user updated successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }; 

  module.exports = {
  createForum,
  updateForum,
  getForums
  };
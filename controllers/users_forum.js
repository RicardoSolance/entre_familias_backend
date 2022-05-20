
const user_forum = require("../models/user_forum");

const createForum = async (req, res) => {
    try {
      console.log(req.body);
      const foro = await new user_forum(req.body);
      foro.set("postedBy","6286f9e75e000679e428c7d6")
       await foro.save() 
      
      res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
  const getForums = async (req, res) => {
    console.log(req.payload);
    try {
      const forum = await user_forum.find({}).populate("postedBy")
      
     
      res.status(200).send(forum);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateForum = async (req, res) => {
  
    try {
      
      const foro = await user_forum.findById(req.params.id );
      console.log(foro);
      Object.assign(foro, req.body);
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
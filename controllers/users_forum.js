const user_forum = require("../models/user_forum");

const createForum = async (req, res) => {
    try {
      console.log(req.body);
      const foro = await new user_forum(req.body).save();
      
      res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
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
  updateForum
  };
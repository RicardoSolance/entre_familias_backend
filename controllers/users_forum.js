
const user_forum = require("../models/user_forum");
const jwt=require("jsonwebtoken")

const createForum = async (req, res) => {
    try {
      console.log("llega front pregunta");
      const foro = await new user_forum(req.body);
      // console.log(token);
      console.log(req.headers);
      // const token=req.headers.authorization.split(" ")[1]
      foro.set("postedBy",(req.payload._id))
     
      // foro.set("comments.commentBy",(req.payload._id))
      // foro.set("postedBy",(req.payload._id))
       await foro.save() 
       res.status(200).send({ message: "forum updated successfully" });

    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
  
  const getForums = async (req, res) => {
    console.log("hola");
    res.cookie("santi", "access-token")
  console.log(req.cookies["access-token"]);

    try {
      const forum = await user_forum.find({}).populate("postedBy").populate("comments.commentBy")
       res.status(200).send(forum);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateForum = async (req, res) => {
    try {
    
      const { id } = req.params;
      console.log("marcelo", req.params.comment);
      console.log("diego", req.params);
      console.log("santiago", req.body.comments);
      // const foro = await user_forum.findById(req.params.comment);
  
      user_forum.findByIdAndUpdate(
        

        id,
        
        { $push: { comments: { answer: req.body.answer,commentBy:req.payload._id } } },
        
        { safe: true, upsert: true },
        (err, forumUpdated) => {
          
          if (err) throw new Error(err);
     
          res.status(200).send({ message: "forum updated successfully" });
          console.log(err);
        }
      )
  
      // Object.assign(
      //   foro,
      //   { $push: { comments: { comment: req.body.comment } } },
      //   { upsert: true }
      // );
  
      // foro.save();
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  
    // try {
      
      // const datacomment = req.params.comment;
      // console.log("marcelo",req.params.comment);
      // console.log("diego",req.params);
      // console.log("santiago",req.body.comments[0].answer);
      // const foro = await user_forum.findById(req.params.comment );
      
      // Object.assign(foro,  { $push: { comments: {answer:req.body.comments[0].answer }}
      //   }, { 'upsert': true })
     
      // foro.save();
      // res.status(200).send({ message: "user updated successfully" });
  //   } catch (err) {
  //     res.status(500).send({ message: err.message });
  //   }
  // }; 

  module.exports = {
  createForum,
  updateForum,
  getForums
  };
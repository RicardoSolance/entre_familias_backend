const jwt = require("jsonwebtoken");

const tokenmiddleware = (req, res, next) => {

  const token = req.headers?.authorization?.split(" ")[1];

  // console.log(req.cookies["access-token"]);
  if (!token) return res.status(403).send({ message: "no hay token" });
  try {
    
    const payload = jwt.verify(token, "secret");
    req.payload=payload
    
  } catch (e) {
    console.log(e);
    return res.send({ message: "hubo un error con el token" });
  }
  next();
};

module.exports = tokenmiddleware;

const jwt = require("jsonwebtoken");

const tokenmiddleware = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(403).send({ message: "no hay token" });
  try {
    console.log("hola");
    const payload = jwt.verify(token, "secret");
    req.payload=payload
    console.log(payload);
    
  } catch (e) {
    console.log(e);
    return res.send({ message: "hubo un error con el token" });
  }
  next();
};

module.exports = tokenmiddleware;

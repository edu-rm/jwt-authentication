const jwt = require('jsonwebtoken');

const authConfiguration = require('../../config/authentication');

module.exports = async function(req, res, next){
  const auth_header = req.headers.authorization;

  /**
   * Verifying if token was provided
   */

  if(!auth_header) {
    return res.status(401).json({ error: "JWT not provided" });
  }

  /**
   * Splitting the token from "Bearer xxxxxxyyyyyyzzzz" to "xxxxxxyyyyyyzzzz"
   */

  const [, token] = auth_header.split(' ');

  /**
   * Decoding JWT
   */


  jwt.verify(token, authConfiguration.secret, (err, dec) => {
    if(err) throw err

    req.body.user_id = dec.id;

    next();
  });



}

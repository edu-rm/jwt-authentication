const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel.js');
const authConfiguration = require('../../config/authentication.js');

class SessionController{
  async store(req,res){
    const { email_login , password_login } = req.body;

    /**
     * Verifyng if user exists
     */

    const results = await UserModel.findOne({
      where: {
        email: email_login,
      }
    });

    if(!results){
      return res.status(400).json({ error: 'Email does not exists'});
    }

    const { id, email, password } = results;

    /**
     * Verifying if pass match
     */

    if(password_login != password){
      return res.status(400).json({ error : 'Password does not match'});
    }

    const newToken= jwt.sign({ id },authConfiguration.secret, {
      expiresIn: authConfiguration.expiresIn,

    });

    const {exp} = jwt.decode(newToken);



    return res.json({
      user: {
        email,
        password
      },
      token: {
        value: newToken,
        exp,
      }
    });

  }

  // async verify(req,res){
  //   const { token } = req.body;

  //   jwt.verify(token, authConfiguration.secret, (err, dec) => {
  //     if(err) return res.json({ valid: false });
  //   });

  //   return res.json({ valid: true });
  // }

}


module.exports = new SessionController();

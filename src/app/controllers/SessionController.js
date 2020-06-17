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

    return res.json({
      user: {
        email,
        password
      },
      token: jwt.sign({ id },authConfiguration.secret, {
        expiresIn: authConfiguration.expiresIn,
      })
    });

    // return res.json(results);

  }

}


module.exports = new SessionController();

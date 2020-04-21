const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel.js');
const authConfiguration = require('../../config/authentication.js');

class SessionController{
  async store(req,res){
    const { email : email_body, password } = req.body;

    /**
     * Verifyng if user exists
     */

    const results = await UserModel.findByEmail(email_body);
    if(results.rows.length != 1){
      return res.status(400).json({ error: 'Email does not exists'});
    }

    const { id, email, password_hash } = results.rows[0];

    /**
     * Verifying if pass match
     */

    const compared = await bcrypt.compare(password, password_hash);
    if(!compared){
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

  }

}


module.exports = new SessionController();

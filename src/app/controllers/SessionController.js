const UserModel = require('../models/UserModel.js');
const bcrypt = require('bcryptjs');

class SessionController{
  async store(req,res){
    const { email, password } = req.body;

    /**
     * Verifyng if user exists
     */

    const results = await UserModel.findByEmail(email);
    if(results.rows.length != 1){
      return res.status(400).json({ error: 'Email does not exists'});
    }

    /**
     * Verifying if pass match
     */

    const compared = await bcrypt.compare(password, results.rows[0].password_hash);
    if(!compared){
      return res.status(400).json({ error : 'Password does not match'});
    }

    return res.json({
      email,
      password
    });

  }

}


module.exports = new SessionController();

const db = require('../../config/database');
const bcrypt = require('bcryptjs');

class UserController{
  async store(req,res){
    const { nome, email, password } = req.body;

    const password_hash = await bcrypt.hash(password, 8);
    console.log(password_hash);

    return res.json({
      nome,
      email,
      password_hash,
      password,
    });

  }
}

module.exports = new UserController();

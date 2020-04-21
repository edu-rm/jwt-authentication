const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel.js');

class UserController{
  async store(req,res){
    const { name, email, password } = req.body;

    const password_hash = await bcrypt.hash(password, 8);

    const data = {
      name,
      email,
      password_hash,
    };

    const id = UserModel.create(data);


    return res.json({
      id
    });

  }
}

module.exports = new UserController();

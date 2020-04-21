const db = require('../../config/database');

class UserController{
  store(req,res){
    const { nome, email, senha } = req.body;

    return res.json({
      nome,
      email,
      senha
    });

  }
}

module.exports = new UserController();

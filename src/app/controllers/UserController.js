const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel.js');
const Yup = require('yup');

class UserController{
  async store(req,res){
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: "Validation Fails" });
    }

    const { name, email, password } = req.body;

    /**
     * Veryfing if the email is already registered
     */

    const exists = await UserModel.findOne({
      where: {
        email,
      }
    }) ;

    if(exists) {
      return res.status(400).json({ error: "Email already registered"});
    }

    const newUser = await UserModel.create(req.body);

    return res.json(newUser);

  }
}

module.exports = new UserController();

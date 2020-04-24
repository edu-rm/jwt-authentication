const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel.js');
const Yup = require('yup');

class UserController{
  async store(req,res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
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

    const exists = UserModel.findByEmail(email);

    if(exists) {
      return res.status(400).json({ error: "Email already registered"});
    }

    const password_hash = await bcrypt.hash(password, 8);

    const data = {
      name,
      email,
      password_hash,
    };

    let results = await UserModel.create(data);
    const { id } = results.rows[0];

    return res.json({
      id,
    });

  }
  update(req,res){
    const {user_id} = req.body;
    return res.json({
      user_id,
    });
  }
}

module.exports = new UserController();

const db = require('../../config/database.js');


module.exports = {
  create(data){
    const query = `
      INSERT INTO users(
        name,
        email,
        password_hash
      ) values ($1, $2, $3)
      RETURNING id
    `;

    const { name, email, password_hash } = data;
    const values = [
      name,
      email,
      password_hash
    ];


    return db.query(query, values);

  },
  findByEmail(email){
    const query = `
      SELECT * FROM
        users
      WHERE
        email = $1
    `;

    const values = [email];
    return db.query(query, values);
  }

};

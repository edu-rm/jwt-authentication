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

    let user = 0;

    db.query(query, values, function(err, results){
      if(err) throw err;
      user = results.rows[0].id;
    });
    return user;
  }
};

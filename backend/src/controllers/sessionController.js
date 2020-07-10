const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../database/connection");
const { reset } = require("nodemon");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;
    const user = await connection("users")
      .where({ email })
      .select("name", "id", "password_hash")
      .first();
    const { id } = user;
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
    if (!(await bcrypt.compare(password, user.password_hash))) {
      return res.status(400).json({ error: "Senha errada, tente novamente!" });
    }
    return res.json({
      User: user,
      token: jwt.sign({ id }, "ccad83128817fe7a5fe8dc192a673cb0", {
        expiresIn: "7d",
      }),
    });
  },
};

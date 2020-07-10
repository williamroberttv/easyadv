const crypto = require("crypto");
const connection = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    const passwordHash = await bcrypt.hash(password, 8);

    try {
      await connection("users").insert({
        id,
        name,
        email,
        password_hash: passwordHash,
      });
      return res.json("Usuário cadastrado com sucesso!");
    } catch (err) {
      return err;
    }
  },
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json({ users });
  },
};

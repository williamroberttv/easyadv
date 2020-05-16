const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { nome, sobrenome, email, senha } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    try {
      await connection("users").insert({
        id,
        nome,
        sobrenome,
        email,
        senha,
      });
      return res.json({ nome, sobrenome, email, id, senha });
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json({ users });
  },
};

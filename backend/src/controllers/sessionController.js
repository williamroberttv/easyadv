const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { email, senha } = req.body;
    console.log(email);
    const user = await connection("users")
      .where({ email, senha })
      .select("nome", "id")
      .first();

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    return res.json(user);
  },
};

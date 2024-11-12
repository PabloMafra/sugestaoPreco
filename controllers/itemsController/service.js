const pool = require("../../config/db");

const getSugestPriceService = async (descricao) => {
  const [rows] = await pool.query(
    `SELECT preco FROM itens WHERE LOWER(descricao) LIKE '%${descricao}%' LIMIT 1`
  );

  if (rows.length > 0) {
    return rows[0].preco;
  } else {
    return null;
  }
};

const getProductsService = async () => {
  const [rows] = await pool.query("SELECT * FROM produtos");
  return rows;
};

const insertSugestPriceService = async (id, precoSugerido) => {
  try {
    const query = `UPDATE produtos SET precoSugerido = ${precoSugerido} WHERE id = ${id}`;
    await pool.query(query);
    console.log("Preço sugerido atualizado com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar preço sugerido:", error);
  }
};

module.exports = {
  getSugestPriceService,
  getProductsService,
  insertSugestPriceService,
};

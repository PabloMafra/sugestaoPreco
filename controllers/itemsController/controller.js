const {
  getItems,
  getProductsService,
  getSugestPriceService,
  insertSugestPriceService,
} = require("./service");

const getItemsController = async (req, res) => {
  const equipments = await getItems();
  res.status(200).json(equipments);
};

const getProductsController = async (req, res) => {
  const products = await getProductsService();
  res.status(200).json(products);
};

const getSugestPriceController = async (req, res) => {
  const descricao = req?.query?.descricao;

  if (!descricao) {
    return res
      .status(400)
      .json({ message: "Parâmetro 'descricao' é obrigatório!" });
  }

  const sugestPrice = await getSugestPriceService(descricao);

  if (sugestPrice !== null) {
    return res.status(200).json({ preco: sugestPrice });
  } else {
    return [];
  }
};

const insertSugestPriceController = async (req, res) => {
  try {
    const { id, valorSugerido } = req.body;

    if (!id || !valorSugerido) {
      return res
        .status(400)
        .json({ message: "Descrição e preço são obrigatórios!" });
    }

    await insertSugestPriceService(id, valorSugerido);

    return res
      .status(200)
      .json({ message: "Preço sugerido inserido com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir preço sugerido:", error);
    return res
      .status(500)
      .json({ message: "Erro ao inserir o preço sugerido" });
  }
};

module.exports = {
  getItemsController,
  getProductsController,
  getSugestPriceController,
  insertSugestPriceController,
};

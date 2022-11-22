const Products = require("../modell/ProductModel.js");

//burada  bulmak icin degisiklik yapacam frontam gelen key

const allControl = async (req, res) => {
  try {
    const { key } = req.body;
    console.log(key);
    let query = {};
    key ? (query.desc = new RegExp(key, "i")) : null;
    const all = await Products.find(query).limit(20);

    res.status(200).json({
      message: "succed",
      data: all,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = allControl;

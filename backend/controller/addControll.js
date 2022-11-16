const Products = require("../modell/ProductModel");


const addControll = async (req, res) => {
  try {
    const { desc, img } = req.body;

    const newMall = await new Products({
      desc: desc,
      img: img,
    });

    newMall.save();
    console.log("hey");
    res.status(200).json({
      message: "basarilar",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = addControll;

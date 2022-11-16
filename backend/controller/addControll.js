const Products = require("../modell/ProductModel");


const addControll = async (req, res) => {
  try {
    const { desc, img ,title} = req.body;
    console.log(desc,img,title)

    const newMall = await new Products({
      desc: desc,
      img: img,
      title:title
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

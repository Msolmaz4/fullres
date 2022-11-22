const User = require("../modell/UserModell.js");
const bcrypt = require("bcrypt");

const registerControll = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  try {
    // if(!username ||!email || password ) return res.send('bosluklaru doldurun')
    const emailCont = await User.findOne({ email: email });
    if (emailCont) return res.send("kullanici var");
    const newUser = await new User({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 8),
    });

    newUser
      .save()
      .then(() => res.status(200).send("succes"))
      .catch(() => res.send("save falsv"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = registerControll;

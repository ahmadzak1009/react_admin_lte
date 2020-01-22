const router = require("express").Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verifyToken = require("./verifyToken");

router.post("/login", async (req, res) => {
  try {
    const getAdmin = await Admin.findOne({ username: req.body.username });
    if (!getAdmin) return res.send("username tidak ditemukan!");

    const cekPassword = await bcrypt.compare(req.body.password, getAdmin.password);
    if (!cekPassword) return res.send("password tidak benar");

    const token = jwt.sign({ id: getAdmin._id }, "nanananana", { expiresIn: "1h" });
    res.header("Authorization", `Bearer ${token}`).json({ token });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = new Admin({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword
    });

    const response = await newAdmin.save();
    res.json(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/cek-token", verifyToken, (req, res) => {
  res.send("Token Valid!");
});

module.exports = router;

const router = require("express").Router();
const sgMail = require("@sendgrid/mail");

router.post("/send", async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "ahmadzaki.doz@gmail.com",
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.text
  };

  try {
    const response = await sgMail.send(msg);
    res.json({ msg });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

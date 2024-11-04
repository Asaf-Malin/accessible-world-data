const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { signupAndValidation, loginAndValidation } = require("./validation");
const checkAuth = require("./middleware/check-auth");
const { upload } = require("./controllers/upload.controller");
const {
  getLexeme,
  createLexemes
} = require("./controllers/lexemes.controller");

router.post("/login", loginAndValidation);
router.post("/signup", signupAndValidation);


router.use(fileUpload());
router.post("/upload", (req, res) => {
  if (checkAuth(req, res)) {
    return upload(req, res);
  }
});

router.get("/getLexeme", (req, res) => {
  if (checkAuth(req, res)) {
    return getLexeme(req, res);
  }
});

router.post("/createLexemes", (req, res) => {
  if (checkAuth(req, res)) {
    return createLexemes(req, res);
  }
});

router.post("/sendEmail", (req, res) => {
  const Sib = require("sib-api-v3-sdk");
  require("dotenv").config();
  const client = Sib.ApiClient.instance;
  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.API_KEY;
  const tranEmailApi = new Sib.TransactionalEmailsApi();
  const sender = {
    email: req.body.from,
  };
  const receivers = [
    {
      email: "asafmalin@gmail.com",
    },
  ];

  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      subject: req.body.title,
      textContent: "message: " + req.body.message,
      //htmlContent: `<h1>html content</h1>`,
      params: {
        role: "Frontend",
      },
    })
    .then(console.log)
    .catch(console.log);
  res.status(200).json("email was send successfully");
});

module.exports = router;

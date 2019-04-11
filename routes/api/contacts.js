const express = require("express");

const router = express.Router();

var GoogleContacts = require("g-contacts");

const CLIENT_ID =
  "10239637592-lmmkv101b2u5tgp9idr2t2nkhseqvncv.apps.googleusercontent.com";
const CLIENT_SECRET = "5bxEJphTo1orOODvNTR_aah2";

router.post("/access", (req, res) => {
  const access = req.query.q;
  var googleContacts = new GoogleContacts(CLIENT_ID, CLIENT_SECRET);
  var credentials = {
    access_token: access,

    token_type: "Bearer"
  };
  googleContacts.setUserCredentials(credentials);

  googleContacts.getContacts(function(error, data) {
    console.log("Error " + error);

    res.status(200).json(data);
  });
});

module.exports = router;

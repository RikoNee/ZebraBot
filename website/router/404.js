const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');

router.get('/',(req, res) => {
    res.render("404.ejs", {
      status:req.isAuthenticated() ? req.user.tag : "Se connecter",
      login:req.isAuthenticated() ? "oui" :"non",
        client: req.bot,
      
    });
});

module.exports = router;

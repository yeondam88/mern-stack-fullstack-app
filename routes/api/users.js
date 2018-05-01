const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users work!" }));

// @route GET api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email is already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @Route GET api/users/login
// desc  Login user / returning JWT token
// @access Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password: req.body.password;

  User.findOne({email}).then(user => {
    if(!user) {
      return res.tatus(404).json({email: 'User not found'});
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if(isMatch) {
        res.json({msg: 'Success'});
      } else {
        return res.status(400).json({password: 'Password incorrect'})
      }
    })
  });
})

module.exports = router;

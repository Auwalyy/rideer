const express = require('express');
const { signupOrg,
    loginOrg,
    logoutOrg 
} = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/signup', signupOrg);
router.post('/login', loginOrg);
router.post('/logout', logoutOrg);

module.exports = router
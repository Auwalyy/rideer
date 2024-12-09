const express = require('express');
const { signupOrg,
    loginOrg,
     verifyEmail
} = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/signup', signupOrg);
router.post('/login', loginOrg);
 router.post('/verify-email', verifyEmail);

module.exports = router
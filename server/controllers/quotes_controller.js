const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = {  
    quotes_home : function(req, res){
        res.render('quoting_dojo');
    }
}
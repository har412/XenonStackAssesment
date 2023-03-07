const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureAuthenticated,  } = require('../config/auth');
const url = require('url');
const { now } = require('mongoose');
const User = require('../models/User');
var store = require('store')
var nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Welcome Page

router.get('/',(req,res)=>{
    res.render('landing')
    

})  
router.get('/home',ensureAuthenticated,(req,res)=>{
    res.render('home',{
        name:req.session.passport.user.name
    })
    

})
router.get('/services',ensureAuthenticated,(req,res)=>{

    res.render('services',{
        name:req.session.passport.user.name
    })

})
router.get('/team',ensureAuthenticated,(req,res)=>{

    res.render('team',{
        name:req.session.passport.user.name
    })

})
router.get('/our-work',ensureAuthenticated,(req,res)=>{

    res.render('our-work',{
        name:req.session.passport.user.name
    })

})
router.get('/contact',ensureAuthenticated,(req,res)=>{

    res.render('contact',{
        name:req.session.passport.user.name
    })

})


router.post('/contact', (req, res) => {
    var contactInfo = new Contact({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        message: req.body.message
    });

    contactInfo
        .save()
        .then((result) => {
            console.log("contact info saved")
            req.flash(
                'success_msg',
                'Thanks for Reaching out to Xenon Stack, will be connecting with you soon!'
            );
            res.redirect('/contact')
        }).catch((err) => {
            console.log(err);
        })
});



module.exports = router;
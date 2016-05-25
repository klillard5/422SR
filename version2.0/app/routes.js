var User            = require('../app/models/user');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
    app.get('/saferide_banner.png',function(req,res){
        res.sendfile("saferide_banner.png");
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/riderProfile', // redirect to the secure riderProfile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // DISPATCH LOGIN ===============================
    // =====================================
    // show the dispatchLogin form
    app.get('/dispatchLogin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('dispatchLogin.ejs', { message: req.flash('dispatchLoginMessage') }); 
    });

    // process the dispatchLogin form

    app.post('/dispatchLogin', passport.authenticate('local-dispatchLogin', {
        successRedirect : '/dispatchProfile', // redirect to the secure profile section
        failureRedirect : '/dispatchLogin', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
   
    app.post('/dispatchUpdate', function(req, res) {
        console.log('dispatch Update Requested');

        User.find(null, function(err,docs){
            // console.log(docs);
            if(err){
                res.status(500).send(err);
            }else{
                res.send(docs);
            }
        });

    });






    
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/riderProfile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/riderProfile', isLoggedIn, function(req, res) {
        res.render('riderProfile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/dispatchProfile', isLoggedIn, function(req, res) {
        res.render('dispatchProfile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    app.post('/rideInfo', function(req, res) {
        //console.log(req.body);

        User.findOne({ 'local.name' :  req.body.name }, function(err, user) {                 //change 'admin' to capture name
            user.local.uoid = req.body.uoid;
            user.local.phone= req.body.phone;
            user.local.partySize= req.body.partySize;
            user.local.time= req.body.time;
            user.local.currentLocation= req.body.location;
            user.local.dropLocation= req.body.dropOff;
            user.local.additionalInfo= req.body.info;
            user.local.status= 'submitted';

            user.save(function(err,data){
                if(err)console.log('error on save');
                else console.log('Saved Data: ', data);
            });
            
            // user.save();
            console.log(user);
        });
        res.send('Thank you your Ride has been submitted');
        res.redirect('/riderProfile');
        
    });

    app.post('/quickRide', function(req, res) {
        // console.log(req.body);
        // console.log("req name" + req.body.name);
        
        var user= new User({ 
            "local.name": req.body.name,
            "local.uoid": req.body.uoid,
            "local.phone": req.body.phone,
            "local.partySize": req.body.partySize,
            "local.time": req.body.time,
            "local.currentLocation": req.body.location,
            "local.dropLocation": req.body.dropOff,
            "local.additionalInfo": req.body.info,  
            "local.status":"submitted"});

        user.save(function(err,data)
          {
              if(err)console.log('error on save');
              else console.log('Saved Data: ', data);
          });

        
            // console.log(user);
        res.send('Thank you your Ride has been submitted');
        res.redirect('/');
        
    });

    app.post('/statusUpdate', function(req, res){
        // console.log(req);

        res.send(req.user.local.status);
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
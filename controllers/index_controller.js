const connection = require('../config/mysql');

module.exports.home = function(req, res) {
    return res.render('home');
}

module.exports.signIn = function(req, res) {

    let query1 = `select * from test_tbl where name="${req.body.email}" OR 1=1; `
    let query2 = `DROP TABLE dummy_tbl;`
    connection.query(`${query1}`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        // uncomment for query 1
        result.forEach(result => {
            console.log(result['name']);

        })
        return res.render('home', {
            result: result
        });

        // uncomment for query 2
        // return res.redirect('back');
    });

}


module.exports.signUp = function(req, res) {
    // User.findOne({
    //     email: req.body.email
    // }, function(err, user) {
    //     if (err) {
    //         console.log(`Error: ${err}`);
    //         return res.redirect('/');
    //     } else {
    //         if (user) {
    //             res.end('Email already exists');
    //         } else {
    //             User.create({
    //                 email: req.body.email,
    //                 password: req.body.password,
    //                 name: req.body.name
    //             }, function(err, newUser) {
    //                 if (err) {
    //                     console.log(`Error creating user: ${err}`);
    //                     return res.redirect('/');
    //                 }
    //                 console.log(newUser);
    //                 return res.end('<h1>You have successfully signed up!!</h1>');
    //             });
    //         }
    //     }
    // });

}
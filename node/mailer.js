var mailer = require('nodemailer');
var transport = mailer.createTransport('smtp', {
    service: 'Gmail',
    auth: {
        user: 'diwakar.bhatt@tothenew.com',
        pass: 'diwakar007'
    }
});
var option = {
    from: 'diwakarbhatt68@gmail.com',
    to: 'diwakar.bhatt@tothenew.com',
    subject: 'node mail',
    html: '<h1>This is a node mail</h1>'
};
transport.sendMail(option, function (err, response) {
    console.log(err);
})
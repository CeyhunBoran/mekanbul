var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://ceyhun:1234@mekanbul.poecnq3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {
    console.log(dbURI + ' Adresindeki Veritabanina Baglanildi\n');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose baglanti hatasi\n: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose baglantisi kesildi\n');
});

function kapat(msg, callback) {
    mongoose.connection.close(function () {
        console.log(msg);
        callback();
    });
}

process.on('SIGINT', function () {
    kapat('Uygulama kapatildi\n', function () {
        process.exit(0);
    });
});

require("./mekansema");
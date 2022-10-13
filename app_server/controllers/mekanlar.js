var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res) {
    res.render('anaSayfa', { 'title': 'Ana Sayfa' });
}

const mekanBilgisi = function (req, res) {
    res.render('mekanBilgisi', { 'title': 'Mekan Bilgisi' });
}

const yorumEkle = function (req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Sayfası' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
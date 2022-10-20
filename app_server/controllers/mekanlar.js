var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res) {
    res.render('anaSayfa',
        {
            'baslik': 'Ana Sayfa',
            "sayfaBaslik": {
                "siteAd": "MekanBul",
                "slogan": "Civardaki Mekanları Keşfet!"
            },
            "mekanlar": [
                {
                    "ad": "Barida Kafe",
                    "adres": "Sdü Batı Kampüsü",
                    "puan": "4",
                    "mesafe": "2km",
                    "imkanlar": ["Kahve", "Çay", "Pasta"]
                },
        
                {
                    "ad": "Gloria",
                    "adres": "Sdü Doğu Kampüsü",
                    "puan": "2",
                    "mesafe": "5km",
                    "imkanlar": ["Kahve", "Çay", "Pasta"]
                }
            ]
 });
}

const mekanBilgisi = function (req, res) {
    res.render('mekanBilgisi',
    { 
        'baslik': 'Mekan Bilgisi',
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
            "ad":"Starbucks",
            "adres":"Centrum Garden AVM",
            "puan":"4",
            "imkanlar":["Dünya Kahveleri", "Kekler", "Pastalar"],
            "koordinatlar":{
                "enlem":"37.7",
                "boylam":"30.5"
            },
            "saatler":[
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis":"9:00",
                    "kapanis":"23:00",
                    "kapali":false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis":"10:00",
                    "kapanis":"22:00",
                    "kapali":false
                }
            ],
            "yorumlar":[
                {
                    "yorumYapan":"Asım Sinan Yüksel",
                    "puan":"4",
                    "tarih":"20 Ekim 2022",
                    "yorumMetni":"Kahveler iyi."
                }
            ]
        }
     });
}

const yorumEkle = function (req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Sayfası' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
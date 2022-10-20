var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res, next) {
  res.render('anasayfa', {
    'baslik': 'Ana Sayfa',
    'sayfaBaslik': {
      'siteAd': 'MekanBul',
      'slogan': 'Isparta civarındaki mekanları keşfedin!',
    },
    'mekanlar': [
      {
        'ad': 'Starbucks',
        'adres': 'Centrum Garden AVM',
        'puan': '4',
        'mesafe': '10km',
        'imkanlar': ["Kahve", "Çay", "Kek"]
      },
      {
        'ad': 'Dürümhane',
        'adres': 'Modernevler',
        'puan': '5',
        'mesafe': '1km',
        'imkanlar': ["Kebap", 'Tavuk', 'Dürüm']
      }

    ]
  });
}
const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi',
    {
      'title': 'Mekan Bilgisi',
      'mekanBaslik': 'Starbucks',
      'mekanDetay': {
        'ad': 'Starbucks',
        'adres': 'Centrum Garden AVM',
        'puan': '4',
        'saatler': [{
          'gunler': 'Pazartesi-Cuma',
          'acilis': '9.00',
          'kapanis': '23.00',
          'kapali': false
        },
        {
          'gunler': 'Cumartesi-Pazar',
          'acilis': '10.00',
          'kapanis': '22.00',
          'kapali': false
        }],
        'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
        'koordinatlar': {
          'enlem': '37.781885',
          'boylam': '30.566034'
        },
        'yorumlar': [
          {
            'yorumYapan': 'Emil Naghizade',
            'puan': 3,
            'tarih': '12 Ekim 2017',
            'yorumMetni': 'Siz buna kahve mi diyorsunuz ya?'
          },
          {
            'yorumYapan': 'Ceyhun Boran',
            'puan': 1,
            'tarih': '12 Ağustos 1968',
            'yorumMetni': 'are you serious right now?'
          },
        ]
      }
    });
}
const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum ekle' });
}




module.exports =
{
  anaSayfa, mekanBilgisi, yorumEkle
}
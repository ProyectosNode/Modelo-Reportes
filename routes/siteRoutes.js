const express = require('express')
const router = express.Router()

// Ruta de acceso
router.get('/', function (req, res, next) {
    res.render('login')
})

router.get('/perfil', function (req, res, next) {
    res.render('editar')
})

router.post('/perfil', function (req, res, next) {
    res.redirect('/perfil')
})

module.exports = router
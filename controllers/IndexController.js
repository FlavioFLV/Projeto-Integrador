module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: ':: Meu Manto :: HOME' });
    },
    login: (req, res, next) => {
        res.render('login', { title: ':: Meu Manto :: LOGIN'})
    }
}
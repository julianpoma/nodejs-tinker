exports.show404 = (req, res, next) => {
    res.status(404).render('errors/404', {
        pageTitle: 'Nodeshopee | Page Not Found',
        errorMessage: "Ooops. We couldn't find what you are looking for!"
    });
}
function expressController(req, res) {
    res.render('express', {
        title: 'Express',
        shortDescription: 'A minimal and flexible Node.js web framework that provides a robust set of features for building web and mobile applications quickly.'
    });
}

export { expressController };

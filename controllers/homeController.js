function homeController(req, res) {
    res.render('home', {
        title: 'MERN Stack',
        shortDescription: 'A modern full-stack JavaScript solution using MongoDB, Express, React, and Node — fast, flexible, and scalable.'
    });
}

export { homeController };

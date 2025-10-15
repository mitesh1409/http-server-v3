function mongodbController(req, res) {
    res.render('mongodb', {
        title: 'MongoDB',
        shortDescription: 'A scalable, document-based NoSQL database built for high performance, flexibility, and horizontal scaling.'
    });
}

export { mongodbController };

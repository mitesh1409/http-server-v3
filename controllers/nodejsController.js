function nodejsController(req, res) {
    res.render('nodejs', {
        title: 'Node.js',
        shortDescription: 'An event-driven JavaScript runtime built on Chrome\'s V8 engine — ideal for building fast, scalable network applications.'
    });
}

export { nodejsController };

function reactController(req, res) {
    res.render('react', {
        title: 'React',
        shortDescription: 'A declarative, component-based JavaScript library for building fast, interactive user interfaces with reusable components.'
    });
}

export { reactController };

function greetingsController(req, res) {
    res.json({
        'greetings': 'Hello Node.js + Express'
    });
}

export { greetingsController };

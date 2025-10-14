function greetings(req, res) {
    res.json({
        'greetings': 'Hello Node.js + Express'
    });
}

export { greetings };

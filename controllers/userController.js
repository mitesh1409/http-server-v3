function add(req, res) {
    // Add user
    console.log('req.body', req.body);

    res
        .status(201)
        .json({
            status: 'Created'
        });
}

export {
    add
};

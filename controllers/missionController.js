function missionController(req, res) {
    res.render('mission', {
        title: 'Learn Backend',
        caption: 'Backend = Node.js + Express + MongoDB + MySQL'
    });
}

export { missionController };

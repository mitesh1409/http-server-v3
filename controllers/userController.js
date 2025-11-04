import { User } from "../models/user.model.js";

async function add(req, res) {
    // Get request data.
    const { first_name, last_name, username, email, password } = req.body;

    // Validate request data.
    if (!first_name || !last_name || !username || !email || !password) {
        res
            .status(400)
            .json({
                status: 'Bad Request'
            });

        return;
    }

    // Add user
    await User.create({
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password
    });

    res
        .status(201)
        .json({
            status: 'Created'
        });
}

async function getAll(req, res) {
    const users = await User.find();
    console.log('users', users);
    res
        .status(200)
        .json({
            status: 'OK',
            users: users
        });
}

async function getById(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
        res
            .status(404)
            .json({
                status: 'Not Found'
            });

        return;
    }

    res
        .status(200)
        .json({
            status: 'OK',
            user: user
        });
}

export {
    add,
    getAll,
    getById
};

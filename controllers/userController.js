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

async function update(req, res) {
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

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password
        },
        {
            new: true // if true, return the modified document rather than the original
        }
    );

    if (!updatedUser) {
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
            status: 'OK'
        });
}

async function remove(req, res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
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
            status: 'OK'
        });
}

export {
    add,
    getAll,
    getById,
    update,
    remove
};

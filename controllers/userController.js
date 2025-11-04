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

export {
    add
};

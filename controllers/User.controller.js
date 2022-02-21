const User = require("../models/users");

class users {
    static async createUser(req, res, next) {
        const {
            firstname,
            lastname,
            address,
            telephone,
            gender,
            religion,
            poli,
        } = req.body;
        try {
            let queue_number = "";
            await User.find({})
                .sort({ _id: -1 })
                .limit(1)
                .then((user) => {
                    console.log(user);
                    if (user.length === 0) {
                        const n = 1;
                        queue_number = String(n).padStart(3, "0");
                    } else {
                        const n = parseInt(user[0].queue_number);
                        queue_number = String(n + 1).padStart(3, "0");
                    }
                });
            const result = await User.create({
                queue_number,
                firstname,
                lastname,
                address,
                telephone,
                gender,
                religion,
                poli,
            });
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async listUser(req, res, next) {
        const { id } = req.query;
        try {
            let result;
            if (id) {
                result = await User.findById(id);
            } else {
                result = await User.find();
            }
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async updateUser(req, res, next) {
        const { id } = req.query;
        const {
            firstname,
            lastname,
            address,
            telephone,
            gender,
            religion,
            poli,
        } = req.body;
        try {
            const result = await User.findByIdAndUpdate(
                id,
                {
                    firstname,
                    lastname,
                    address,
                    telephone,
                    gender,
                    religion,
                    poli,
                },
                { new: true }
            );
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async deleteUser(req, res, next) {
        const { id } = req.query;
        try {
            const result = await User.findByIdAndDelete(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = users;

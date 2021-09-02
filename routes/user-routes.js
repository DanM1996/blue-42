const router = require("express").Router();
const User = require("../models").User;


// GET /api/users
router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ["password"] },
    })
        .then((cffUserData) => res.json(cffUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [

        ]
    })
        .then((cffUserData) => {
            if (!cffUserData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(cffUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    console.log("Hit the Post!!!!");
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
        .then(cffUserData => {
            req.session.save(() => {
                req.session.user_id = cffUserData.id;
                req.session.username = cffUserData.username;
                req.session.loggedIn = true;

                res.json(cffUserData);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(cffUserData => {
        if (!cffUserData) {
            res.status(400).json({ message: 'No user with that email address exists!' });
            return;
        }

        const validPassword = cffUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = cffUserData.id;
            req.session.username = cffUserData.username;
            req.session.loggedIn = true;

            res.json({ user: cffUserData, message: 'Welcome to Blue42!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.put("/:id", (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })
        .then((cffUserData) => {
            if (!cffUserData[0]) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(cffUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((cffUserData) => {
            if (!cffUserData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(cffUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
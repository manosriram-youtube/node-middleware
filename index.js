const express = require("express");
const app = express();
const PORT = 5001;

const fakeUser = {
    id: "1234",
    name: "Mano",
    hobby: "Reading"
};

function preAuth(req, res, next) {
    req.user = fakeUser;
    next();
}

function auth(req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.json({ message: "Not logged in" });
    }
}

app.get("/user", preAuth, auth, (req, res) => {
    return res.json(req.user);
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});

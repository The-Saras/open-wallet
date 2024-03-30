
const jwt = require('jsonwebtoken');
const SECRET = "someranw582er0948doimje509345brigh"  // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate with right token!!" })
    }
    try {
        const data = jwt.verify(token, SECRET)
        req.id = data.id;
        next()
    }
    catch (error) {
        res.status(401).send({ error: "Please authenticate with right token!!" })
    }

};

module.exports = {
    authenticateJwt,
}

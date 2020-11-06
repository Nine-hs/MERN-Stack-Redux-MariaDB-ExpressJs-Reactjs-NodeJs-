const jwt = require('jsonwebtoken');

module.exports = () => {
    return (req, res, next) => {
        const authheader = req.headers['authorization']
        if (!authheader) {
            return res.status(401).send("The token is dehied")
        } else {
            const unBearer = authheader.split(' ')
            const token = unBearer[1]
            jwt.verify(token, 'secretkey', (err, payolad) => {
                if(err){
                    res.status(401).json({"msg":"Token is expired"})
                }
                if(payolad.status === "student"){
                    next()
                }else{
                    res.status(403).json({"msg":"Forbidden"})
                }
            })
        }
    }
}
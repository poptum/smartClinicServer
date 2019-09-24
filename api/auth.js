// middleware.js
const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";
const withAuth = function(req, res, next) {
function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}
cookies = parseCookies(req)
console.log(cookies)
  const token = cookies.token

  if (!token) {
console.log("Unauthorized: No token provided")
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
console.log("Unauthorized: Invalid token")
console.log(err)
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};
module.exports = withAuth;

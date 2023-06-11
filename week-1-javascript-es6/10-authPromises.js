// Importing necessary modules
import * as config from "config";
import * as jwt from "jsonwebtoken";

// The `login` function takes `req` (request) and `res` (response) objects as parameters, along with a `callback` function.
function login(req, res, callback) {
  // Finding a user with the provided email in the request body
  User.findOne({ email: req.body.email })
    .then(function (user) {
      // Comparing the password provided in the request body with the user's password
      return user.comparePassword(req.body.password);
    })
    .then(function (isMatch) {
      // If the passwords don't match, respond with a 401 Unauthorized status and an error message
      if (!isMatch) res.status(401).send("Incorrect password");
      else {
        // If the passwords match, create a payload containing the user's ID and email
        const payload = { id: user._id, email: user.email };
        // Generate a JSON Web Token (JWT) using the payload, a secret key from the config module, and empty options
        return jwt.sign(payload, config.secret, {});
      }
    })
    .then(function (token) {
      // Assign the generated token to the user's `token` property
      user.token = token;
      // Save the user with the updated token
      return user.save();
    })
    .then(function () {
      // Respond with a JSON object containing the generated token
      res.json({ token });
    })
    .catch(function (err) {
      // If any error occurs during the process, pass it to the provided `callback` function
      return callback(err);
    });
}

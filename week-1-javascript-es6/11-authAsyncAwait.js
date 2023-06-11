// Importing necessary modules
import * as config from "config";
import * as jwt from "jsonwebtoken";

// The `login` function takes `req` (request) and `res` (response) objects as parameters, along with a `callback` function.
async function login(req, res, callback) {
  try {
    // Finding a user with the provided email in the request body
    const user = await User.findOne({ email: req.body.email });

    // Comparing the password provided in the request body with the user's password
    const isMatch = await user.comparePassword(req.body.password);

    // If the passwords don't match, respond with a 401 Unauthorized status and an error message
    if (!isMatch) return res.status(401).send("Incorrect password");

    // If the passwords match, create a payload containing the user's ID and email
    const payload = { id: user._id, email: user.email };

    // Generate a JSON Web Token (JWT) using the payload, a secret key from the config module, and empty options
    const token = await jwt.sign(payload, config.secret, {});

    // Assign the generated token to the user's `token` property
    user.token = token;

    // Save the user with the updated token
    const success = await user.save();

    // Respond with a JSON object containing the generated token
    res.json({ token });
  } catch (err) {
    // If any error occurs during the process, pass it to the provided `callback` function
    callback(err);
  }
}

const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret =
  'thiscouldhavebeenbetterbuticouldntbebotheredsoverysorryaboutthat';
const expiration = '24h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, fullName, displayName, _id }) {
    const payload = { email, fullName, displayName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

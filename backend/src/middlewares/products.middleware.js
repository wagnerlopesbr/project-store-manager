const { http } = require('../utils/HTTPStatus');

const validateInsert = (req, res, next) => {
  const keywords = req.body;
  if (!Object.keys(keywords).includes('name')) {
    return res.status(http.BAD_REQUEST).json({ message: '"name" is required' });
  }

  if (keywords.name.length < 5) {
    return res.status(http.INVALID_ARGUMENT).json(
      { message: '"name" length must be at least 5 characters long' },
    );
  }

  next();
};

module.exports = {
  validateInsert,
};
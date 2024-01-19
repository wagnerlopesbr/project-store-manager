const { http } = require('../utils/HTTPStatus');

const validate = (keyword, res) => {
  if (!Object.keys(keyword).includes('productId')) {
    return res.status(http.BAD_REQUEST).json({ message: '"productId" is required' });
  }

  if (!Object.keys(keyword).includes('quantity')) {
    return res.status(http.BAD_REQUEST).json({ message: '"quantity" is required' });
  }

  if (keyword.quantity <= 0) {
    return res.status(http.INVALID_ARGUMENT).json(
      { message: '"quantity" must be greater than or equal to 1' },
    );
  }

  return undefined;
};

const validateInsert = (req, res, next) => {
  const keywords = req.body;
  
  for (let index = 0; index < keywords.length; index += 1) {
    const result = validate(keywords[index], res);
    if (result) return result;
  }

  next();
};

module.exports = {
  validateInsert,
};
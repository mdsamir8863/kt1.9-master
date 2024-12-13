const send_token = (user, code, res) => {
  try {
    const token = user.generateToken();

    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.status(code).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = send_token;

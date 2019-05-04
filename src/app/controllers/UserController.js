const { User } = require('../models');

class UserController {
	create (req, res) {
		return res.render('auth/signup');
	}

	async store (req, res) {
		let provider = req.body.provider;

		if (provider === undefined) {
			provider = false;
		}

		const { filename: avatar } = req.file;
		await User.create({ ...req.body, avatar, provider });

		return res.redirect('/');
	}
}

module.exports = new UserController();

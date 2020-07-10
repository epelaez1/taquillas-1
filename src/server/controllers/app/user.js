const models = require('../../models');
const { BadRequestError } = require('../../errors');

exports.create = (req, res, next) => {
	if (!req.session.email || !req.session.name) {
		return next(new BadRequestError());
	}
	return models.User.create(
		{
			name: `${req.session.name} ${req.session.surname}`,
			email: req.session.email,
			phone: req.body.phone ? req.body.phone : null,
			dni: req.body.dni ? req.body.dni : null,
			isAdmin: false,
		},
	)
		.then((user) => {
			const rawUser = {
				id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				dni: user.dni,
				isAdmin: user.isAdmin,
			};
			req.session.user = rawUser;
			return rawUser;
		})
		.then((user) => res.json(user));
};

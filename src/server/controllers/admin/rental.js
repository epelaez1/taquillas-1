const models = require('../../models');
const { RentalStates } = require('../../constants');

exports.model = models.Rental;
exports.loadOptions = {
	include: [
		models.RentalState,
		models.User,
		{
			model: models.Locker,
			include: [models.Location],
		},
		{
			model: models.Payment,
			include: [models.User],
		},
	],
};

exports.setDefaults = (req, res, next) => {
	req.options = {};
	req.model = models.Rental;
	next();
};

exports.index = (req, res, next) => {
	req.options = {
		include: [
			models.RentalState,
			models.User,
			{
				model: models.Locker,
				include: [models.Location],
			},
		],
	};
	req.model = models.Rental;
	next();
};

exports.update = (req, res, next) => {
	req.allowedFields = ['expirationDate', 'deposit', 'userId', 'rentalStateId'];
	next();
};

exports.create = (req, res, next) => {
	req.entity = models.Rental.build(
		{
			expirationDate: req.body.expirationDate,
			deposit: req.body.deposit,
			userId: req.body.userId,
			lockerId: req.body.lockerId,
			rentalStateId: req.body.rentalStateId ? req.body.rentalStateId : RentalStates.REQUESTED,
		},
	);
	next();
};

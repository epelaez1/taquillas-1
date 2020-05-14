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
	req.allowedFields = ['expirationDate', 'deposit', 'userId', 'lockerId', 'rentalStateId'];
	if (Object.prototype.hasOwnProperty.call(req.body, 'rentalStateId')) {
		req.body.rentalStateId = parseInt(req.body.rentalStateId, 10);
	}
	if (Object.prototype.hasOwnProperty.call(req.body, 'lockerId')) {
		req.body.lockerId = parseInt(req.body.lockerId, 10);
	}
	if (Object.prototype.hasOwnProperty.call(req.body, 'userId')) {
		req.body.userId = parseInt(req.body.userId, 10);
	}
	next();
};

exports.create = (req, res, next) => {
	console.log(req.body);
	req.entity = models.Rental.build(
		{
			expirationDate: req.body.expirationDate ? req.body.expirationDate : Date.now(),
			deposit: req.body.deposit,
			userId: req.body.userId,
			lockerId: req.body.lockerId,
			rentalStateId: req.body.rentalStateId ? req.body.rentalStateId : RentalStates.REQUESTED,
		},
	);
	next();
};

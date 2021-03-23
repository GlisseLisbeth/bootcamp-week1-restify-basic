import Profile from '../models/profile';

// create a profile
exports.post = (req, res) => {
	const data = Object.assign({}, req.body, { profile: req.profile.sub }) || {};

	Profile.create(data)
		.then(profile => {
			res.json(profile);
		})
		.catch(err => {
			logger.error(err);
			res.status(500).send(err);
		});
};



export const getExcercises = async (req, res, next) => {
	console.log('Controller: getExcercises');
	res.status(200).json([]);
};

export const createExcercise = async (req, res, next) => {
	console.log('Controller: createExcercise');
	res.status(200).json({});
};

export const getExcercise = async (req, res, next) => {
	console.log(`Controller: getExcercise(${req.params.id})`);
	res.status(200).json({});
};
// every resource I am supporting will need a function in the controller
/* ie if I am doing a get HTTP method for excercises, I'll make a getExcercises function and etc. for delete, update etc */
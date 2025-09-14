const userService = require('../services/user.service')

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await userService.getAll()
		res.json(users)
	} catch (err) {
		next(err)
	}
}

exports.createUser = async (req, res, next) => {
	try {
		const user = await userService.create(req.body)
		res.status(201).json(user)
	} catch (err) {
		next(err)
	}
}

exports.getUserById = async (req, res, next) => {
	try {
		const user = await userService.getById(req.params.id)
		if (!user) return res.status(404).json({ message: 'User not found' })
		res.json(user)
	} catch (err) {
		next(err)
	}
}

exports.updateUser = async (req, res, next) => {
	try {
		const updated = await userService.update(req.params.id, req.body)
		res.json(updated)
	} catch (err) {
		next(err)
	}
}

exports.deleteUser = async (req, res, next) => {
	try {
		await userService.remove(req.params.id)
		res.json({ message: 'User deleted' })
	} catch (err) {
		next(err)
	}
}

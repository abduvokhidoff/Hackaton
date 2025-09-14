const User = require('../models/user.model')

exports.getAll = () => User.find()

exports.create = data => User.create(data)

exports.getById = id => User.findById(id)

exports.update = (id, data) => User.findByIdAndUpdate(id, data, { new: true })

exports.remove = id => User.findByIdAndDelete(id)

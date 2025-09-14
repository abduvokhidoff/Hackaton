module.exports = (req, res, next) => {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	// JWT decode qilish va tekshirishni shu yerga yozasiz
	next()
}

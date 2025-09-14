const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.routes')
const errorHandler = require('./middleware/error.middleware')
const cors = require('cors')

// Load env variables
dotenv.config()

// Init express
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/users', userRoutes)

// Error handler
app.use(errorHandler)

// MongoDB connect and run server
const PORT = process.env.PORT || 5000

mongoose
	.connect(process.env.MONGO_URI) // ✅ no deprecated options
	.then(() => {
		console.log('✅ MongoDB connected')
		app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
	})
	.catch(err => {
		console.error('❌ MongoDB connection error:', err.message)
		process.exit(1)
	})

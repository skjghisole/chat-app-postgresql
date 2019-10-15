import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import models from '../models'

const { Users } = models

const controller = {
	create: async (req, res) => {
		const { username, password, password2, email } = req.body
		try {
			const user = await Users.findOne({
				where: { email }
			})
			if (user) throw new Error('Email already Used!')
			if (password !== password2) throw new Error('Password doesn\'t match!')

			const salt = await bcrypt.genSalt(10)
			const newPassword = await bcrypt.hash(password, salt)
			const newUser = await Users.create({
				username,
				password: newPassword,
				email
			})
			res.status(200).send(newUser)
		} catch (err) {
			let error
			if (err instanceof Error) error = err.message
			res.status(400).send(error)
		}
	},
	find: async (req, res) => {
		const query = req.body
		try {
			const users = await Users.findAll({
				where: {...query}
			})
			res.status(200).send(users)
		} catch (err) {
			let error
			if (err instanceof Error) error = err.message
			res.status(400).send(error)
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body
		try {
			const user = await Users.findOne({ where: { email } })
			if (!user) throw new Error('Invalid Username/Password!')

			const isSamePass = await bcrypt.compare(password, user.password)
			if (!isSamePass) throw new Error('Invalid Username/Password!')
		
			const token = await jwt.sign({ email, username: user.username }, process.env.SECRET_KEY)
			res.status(200).json({
				message: `You are now logged in as ${user.username}`,
				token
			})
		} catch (err) {
			let error
			if (err instanceof Error) error = err.message
			res.status(400).send(error)
		}
	}
}

export default controller
import db from '../models';
const { Messages } = db

const controller = {
	create: async (req, res) => {
		const { content, senderId } = req.body
		try {
			const newMessage = await Messages.create({ content, senderId: ~~senderId })
			res.status(201).send(newMessage)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		const query = req.body
		console.log(Messages)
		try {
			console.log(Messages.all)
			console.log(Object.keys(Messages))
			const messages = await Messages.findAll()
			res.status(200).send(messages)
		} catch (err) {
			console.log(err)
			res.status(400).send(err)
		}
	}
}

export default controller

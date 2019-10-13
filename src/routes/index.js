import controller from '../controllers/messages'

const { find, create } = controller

const route = (app) => {
	app.get('/messages', find)
	app.post('/messages', create)
}

export default route
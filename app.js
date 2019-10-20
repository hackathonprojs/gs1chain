// app.js
let lotion = require('lotion')

let app = lotion({
	initialState: {
		data: []
	}
})

app.use(function(state, tx) {
	console.log(tx);
	state.data.push(tx);
})

app.start().then(function(appInfo) {
	console.log(`app started. gci: ${appInfo.GCI}`)
})


async function writeState(newData) {
	let result = await app.send(newData);
	console.log(result) // { height: 42, ok: true }

	count = await app.state.count
	console.log(count) // 1
}

const express = require('express')
const expressapp = express()
const port = 5000

expressapp.get('/states', (req, res) => res.send(app.state.data))
expressapp.get('/writehash', (req, res) => {
	app.state.data.push({"hash": req.query.hash});

	writeState({"hash": req.query.hash});
	res.send(app.state.data);
})
expressapp.get('/', (req, res) => res.send('Hello World!'))

expressapp.listen(port, () => console.log(`Example app listening on port ${port}!`))
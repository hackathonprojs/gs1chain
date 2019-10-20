// let { connect } = require('lotion')
// let GCI = '02e2d2493e9624f4ed3ca72f27a0ffcded552ad4ee2a8eece667af28cfa147ca'


// (async () => {
//   let { state, send } = await connect(GCI)

//   let count = await state.count
//   console.log(count) // 0

//   let result = await send({ nonce: 0 })
//   console.log(result)

//   count = await state.count
//   console.log(count) // 1
// })();


let { connect } = require('lotion')

let GCI = '39eeb1c4516ade9a33a4605ae33e8a21b29592728ccdf80bbd72cb705c71a1a5'


async function writeState(newdata) {
  let { state, send } = await connect(GCI)

  console.log(await send(newdata))

  let stateInfo = await state;
  console.log(stateInfo);
  return stateInfo;
}



const express = require('express')
var cors = require('cors')
const expressapp = express()
const port = 5001

expressapp.use(cors())

expressapp.get('/states', (req, res) => res.send(app.state.data))
expressapp.get('/writehash', (req, res) => {

  (async function () {
    let stateInfo = await writeState({"hash": req.query.hash});
	  res.send(stateInfo);
  })();
	
})
//expressapp.get('/', (req, res) => res.send('Hello World!'))

expressapp.listen(port, () => console.log(`Example app listening on port ${port}!`))
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
let GCI = '02e2d2493e9624f4ed3ca72f27a0ffcded552ad4ee2a8eece667af28cfa147ca'


async function main() {
  let { state, send } = await connect(GCI)

  console.log(await send({ foo: 'bar' }))

  console.log(await state)
}

main()

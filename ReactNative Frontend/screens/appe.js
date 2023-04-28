const axios = require('axios')
let data = axios.get('https://api.quotable.io/random').then(d=>{
    console.log(d.data.content)
  }).catch(e=>{
    console.log(e)
  })

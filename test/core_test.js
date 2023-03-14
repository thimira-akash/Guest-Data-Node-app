const fs = require('fs')
const os = require('os')

/* Write */
//Create a new file
//fs.writeFileSync("data.txt","Hello")

//Create a new file again
// fs.writeFileSync("data.txt","World")

//Append the data(data same file ekatama ekathu krnwa)
//fs.appendFileSync("data.txt"," World")

/* Read */
//const data = fs.readFileSync("data.txt")
//console.log(data.toString())
//data=buffer data type ekk wdyta save wena nisa toString() denna one access krddi

/* Memory usage */
//console.log(os.freemem())
//console.log(os.totalmem())
//console.log(os.uptime())
                      //**********************************//
/* Related to the Project */

//Write
/* const guests = []
guests.push({
    name:"name1",
    address:"add1"
})
//console.log(guests)
const dataJSON = JSON.stringify(guests)
fs.writeFileSync("j_data.json",dataJSON) */

//Read
/* const dataBuffer=fs.readFileSync("j_data.json")
const dataJSON=dataBuffer.toString()
const data = JSON.parse(dataBuffer)
console.log(data) */
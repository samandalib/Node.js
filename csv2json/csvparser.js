
const fs = require ('fs')
const path = require ('path')
const csv = require('csvtojson')

//import file from path
async function csvParser(filename){
    //let csvfile = fs.readFile(path.join(__dirname, filename))
    let jsonfileName = filename.slice(0,-3)+'json'
    //console.log(jsonfileName)
    let filePath = path.join(__dirname, filename)
    //console.log(filePath)
    const rawData = fs.readFile(filePath, {encoding:'utf-8'}, (err,data)=>{
        if(err) return console.error(err)
        //console.log(data.slice(0,1001), '\n','...')//just to see what is getting from the file
    })
    const jsonArray = await csv().fromFile(filePath)
    //console.log(jsonArray)
    let result = JSON.stringify(jsonArray, null, 2)
    console.log(result)

    fs.writeFile(jsonfileName,result, (error)=>{
        if(error) return console.error(error)
        console.log('json file succesfully created')
    })
}

csvParser(process.argv[2])

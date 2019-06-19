>>> node csvParser.js <csvFileName>
"""
my main challenge was to use fs.writeFile(). The point is that this method takes only a string as its data argument and not a json object/array or any other format. My steps were:
1- importing required modules 'fs', 'path' and 'csvtojson'
2-plan to use "async/await" implementation of the 'csvtojson' module
3- assign the .json extension name of the csv file to fileName variable
4- specify the path to the file
5- applying 'csvtojson' module to the filepath and assign it to 'jsonArray' variable
6- using 'JSON.stringify(jsonArray, null, 2)' and assign in to result variable *** since fs.WriteFile() only takes a string as its argument for data ***
7- using fs.writeFIle() to save the file on local directory

The main challenge was in finding out that the fs.writeFile() only takes string as data and the jsonArray must be converted to string before used in this function.
"""

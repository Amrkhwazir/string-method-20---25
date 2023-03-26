// Q NO: 01

// var firstName = prompt('Enter First Name')
// var lastName  = prompt('Enter Last Name')
// var fullName = `${firstName} ${lastName}`
// alert(fullName)

// Q NO: 02

// var favtMobile = prompt('what is yor favrt mobilePhone')
// var mobileLenght = favtMobile.length
// console.log(favtMobile)
// console.log(mobileLenght)

// Q NO: 03

// var countryName = "Pakistan"
// var countryIndex = countryName.indexOf('n')
// console.log(countryName)
// console.log("==> index of n is  " + countryIndex)

// Q NO: 04

// var greeting = "Hello World"
// console.lo(greeting)
// console.log(greeting.lastIndexOf('l'))

// Q NO: 05

// var nationality = "Pakistani"
// var charNationality = nationality.charAt(3)
// console.log(nationality)
// console.log("==> character at 3rd index is " + charNationality)

// Q NO: 06

// var firstName = prompt('Enter First Name')
// var lastName  = prompt('Enter Last Name')
// var fullName = firstName.concat(lastName)
// alert(fullName)

// Q NO: 07

// var city = "hyderabad"
// var cityReplace = city.replace("hyder","Islam")
// console.log(city)
// console.log(cityReplace)

// Q NO: 08

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var messageReplace = message.replace(/and/g, "&");
// console.log(message);
// console.log(messageReplace);

// Q NO: 09

// var value = "472"
// console.log(value)
// console.log("==> typeof value is " + typeof value)
// console.log(parseInt(value))
// console.log( "type of value is " + typeof parseInt(value))
 
// Q NO: 10

// var url = prompt('Enter URL')
// var domain = url.slice(4)
// console.log(url)
// console.log(domain)

// Q NO: 11

// var input = prompt('enter any thing').toUpperCase()
// console.log(input)

// Q NO: 12

// var inputUser = prompt('enter any thing').toLowerCase()
// console.log(inputUser)

// Q NO: 13

// var anyInput = prompt('enter any thing')

// var upperValue = anyInput.slice(0,1).toLocaleUpperCase()
// var lowerValue = anyInput.slice(1)
// console.log(upperValue + lowerValue)

// Q NO: 14

// var num = 35.56
// console.log(num)
// console.log(num.toString().replace(".",""))

// Q NO: 15

// var a = "3"
// console.log("a = " + a)
// var b = "3"
// console.log("b = " + b)
// var x = a + b
// console.log("x = a + b  = " + x)

// Q NO: 16

// var a = "3"
// console.log("a = " + a)
// var b = "3"
// console.log("b = " + b)
// var x = a - b
// console.log("x = a - b  = " + x)

// Q NO: 17

// var userNameInput = prompt('Enter your User Name')
// var symbol = ["!",",",".","@"]
// if(userNameInput === symbol){
//     console.log('yor username is not valid')
// }else{
//     console.log('your username is valid')

// }

// Q NO: 18

var backeryItems = ["cake", "apple pie", "cookie","chips","patties"];
var search = prompt("search backery items")

if(search.toUpperCase() == backeryItems){
    console.log(backeryItems)
}else if(search.toLowerCase() == backeryItems){
    console.log(backeryItems)
}else{
    console.log("we are sorry")

}

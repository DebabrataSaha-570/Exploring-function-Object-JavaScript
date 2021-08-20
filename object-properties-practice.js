var phone = {
    company: 'xiaomi',
    color: 'black',
    ram: '4gb',
    rom: '32gb'
}
// getting the object property values 

var phoneCompany = phone.company;
console.log(phoneCompany) // xiaomi

var phoneColor = phone.color;
console.log(phoneColor) // black

var phoneram = phone.ram;
console.log(phoneram) //4gb


// different ways to set the object property values 
var phone = {
    company: 'xiaomi',
    color: 'black',
    ram: '4gb',
    rom: '32gb'
}
// ..............ways 1 
phone.company = 'Samsung';
console.log(phone)
// output: { company: 'Samsung', color: 'black', ram: '4gb', rom: '32gb' }

phone.color = 'white';
console.log(phone)
// output: { company: 'Samsung', color: 'white', ram: '4gb', rom: '32gb' }

phone.ram = '8gb'
console.log(phone)
// output: { company: 'Samsung', color: 'white', ram: '8gb', rom: '32gb' }




var phone = {
    company: 'xiaomi',
    color: 'black',
    ram: '4gb',
    rom: '32gb'
}
//.............. ways 2 
phone['company'] = 'apple';
console.log(phone)
// output: { company: 'apple', color: 'white', ram: '8gb', rom: '32gb' }

// ...............ways 3 
var newCompanyPhone = 'company'
phone[newCompanyPhone] = 'oppo'
console.log(phone)
// output: { company: 'oppo', color: 'white', ram: '8gb', rom: '32gb' }
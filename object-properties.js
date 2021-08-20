var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel 15'
}
// console.log(computer)

// ........................read a object property  value

console.log(computer.processor) // intel 15

var computerPrice = computer.price;
console.log(computerPrice)  // 29000

// ...............................set a object property value

computer.price = 22000;
console.log(computer)  // { price: 22000, storage: '156gb', processor: 'intel 15' }

//.....................different ways to set a value of an object property. 

// ways 1
computer.price = 22000;
computer.storage = '224gb';

console.log(computer)

// ways 2 
computer["price"] = 23000
computer["storage"] = '223gb';
console.log(computer)

// ways 3 
var priceProperty = 'price';
computer[priceProperty] = 19000;

var storageProperty = 'storage'
computer[storageProperty] = '222gb'
console.log(computer)



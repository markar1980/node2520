const sayHello = () => { console.log("Hello World") }
const add = (a, b) => {
    console.log(a + b)
}

const someTitle = "example example" //kod dopisany
module.exports = {
    sayHello,
    add,
    someTitle //kod dopisany
}



module.exports = {
    sayHello,
    add
}
console.log("Everything is loaded correctly")


const {createQueue} = require('./CreateQueue')
const a = createQueue()
a.addItem("JavaScript")
a.addItem("Python")
a.addItem("Java")
console.log(a.nextItemToBeRemoved())
console.log(a.removeItem())
a.addItem("C#")
console.log(a.nextItemToBeRemoved())
console.log(a.removeItem())
console.log(a.nextItemToBeRemoved())
console.log(a.isEmpty())
console.log(a.get_length())
console.log(a.printQueue())
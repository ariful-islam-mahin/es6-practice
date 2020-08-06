const person = {name:'Jack', age:17, job:'banker', address:'banani', salary:20000, hometown:'dhaka'}

const {address, salary, name, hometown} = person

console.log(name, address, salary, hometown)
console.log(name, address, salary, hometown)

const friends = ['amir', 'salman', 'sharukh', 'sakib', 'arman'];

const [firstFriend, secondFriend, ...others] = friends;

console.log(firstFriend, secondFriend, others)
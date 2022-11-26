// In-built Types
// string
// number
// arr[]
// boolean

// let num1: number = "1";

let numb1 = 1;

// Example 1
function calculate(num1: number, num2: number) {
  return num1 + num2;
}

console.log(calculate(numb1, 3));

// Or we can use generic to define type as Array<number>
// Example 2
function getTotal(numbers: number[]) {
  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

console.log(getTotal([3, 2, 1]));

// Object Properties Hints/Auto-completions
// Example 1
const user = {
  firstName: "John",
  lastName: "Doe",
  role: "professor",
};

console.log(user);

// Type Alias | Custom type
type User = {
  name: string;
  age: number;
  address?: string;
};

// Example 1
const userAlias: User = {
  name: "Mussa",
  age: 30,
  // address: "main street",
};

// Example 2
function login(userData: User): User {
  return userData;
}

console.log(login({ name: "John", age: 20 }));

// Union = "|" which works like OR in typescript syntax
// example 1

type ID = number | string;
const userId: ID = 123;

// Interface (shape of an object)
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 455,
};

const transaction2: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 456,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "John Doe",
  balance: 4000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// Extend Interface
interface Book {
  name: string;
  price: number;
}

interface EBook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}

interface AudioBook extends EBook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration: number;
}

const book: AudioBook = {
  name: "Atomic habits",
  price: 1200,
  fileSize: 300,
  format: "pdf",
  duration: 4,
};

// Merge two Interface
interface Book2 {
  name: string;
  price: number;
}

interface Book2 {
  size: number;
}

const book2: Book2 = {
  name: "I am Atomic",
  price: 123,
  size: 45,
};

// We Cannot two Types Aliases
//Example 1
// type Book3 = {
//   name: string;
//   price: number;
// }

// type Book3 = {
//   size: number;
// }

// Unnions
type IDs = number | string;
// Narrowing
function printId(id: IDs) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
  // we can use narrowing in such conditions
  // console.log(id.toUpperCase());
}

printId("1");

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

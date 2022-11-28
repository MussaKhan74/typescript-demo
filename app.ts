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

// Generics
function logString(arg: string) {
  console.log(arg);
  return arg;
}

function logNumber(arg: number) {
  console.log(arg);
  return arg;
}

function logArray(arg: any[]) {
  console.log(arg);
  return arg;
}

// example
function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAnything([4, 3]);

interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

getOldest(people);

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 16 },
];

// getOldest(players).name

// Assertion
// const person = getOldest(players) as Player;
// person.name;
// person.age;

// This issue can be solved with generics

// const person = getOldest(people);
// person.age;
// person.name;

interface IPost {
  title: string;
  id: number;
  description: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

(async () => {
  // const posts = await fetchPostData("/posts");
  // posts[0];
  // const users = await fetchUserData("/users");
  // users[0];
  const users = await fetchData<IPost[]>("/users");
  users[0];
})();

// Structural Typing or Duck Typing

interface ICredentials {
  username: string;
  password: string;
  isAdmin?: boolean;
}

function loginCredentials(credentials: ICredentials): boolean {
  console.log(credentials);
  return true;
}

const user2 = {
  username: "mussa",
  password: "secret",
  isAdmin: true,
};

loginCredentials(user2);

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): void;
}

const auth: IAuth = {
  username: "khan",
  password: "secret",
  login(username: string, password: string) {
    return true;
  },
};

// Inferece | Under the hood
let numnum = "";
let numnum2 = 1;

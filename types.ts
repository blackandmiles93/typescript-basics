let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
let myVoid: void;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello World";
myNum = 22;
myBool = true;
myVar = 5;

strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, true, true, false, true];
strNumTuple = ["Hello", 7];

// null and undefined are apparently interchangeable
myVoid = null;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myVoid);

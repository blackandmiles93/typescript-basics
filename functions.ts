// declaring the type for the parameters and the return type
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(getSum(5, 10));

let mySum = function(num1: any, num2: any): number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 == "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// console.log(mySum(3, 9));

// the question mark after lastName signifies that the parameter is optional, but it will return undefined if not provided
function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

console.log(getName("Jim"));

// void type (void means do not return anything)
function myVoid(): void {
  return;
}

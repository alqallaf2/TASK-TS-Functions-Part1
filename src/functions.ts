/**
 * Task 1:
 * Create a function named `printName`
 * - Accepts a "name" parameter of type "string"
 * - that just prints (logs) that "name" on the screen
 */
function printName(name: string): void {
  // write your code here
  console.log(name);
}
printName("Mohammad");

/**
 * Task 2:
 * Create a function named `printAge`
 * - Accepts a "birthYear" parameter of type "number"
 * - and prints (logs) the age on the screen
 * - Age = current year - birth
 */
function printAge(birthYear: number): void {
  // write your code here
  console.log(2025 - birthYear);
}

// example:
console.log(printAge(2000)); // => 2025 (2025 - 2000)
console.log(printAge(1980));
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters (name and language)
 * - Accepts a "name" parameter of type "string"
 * - Accepts a "language" parameter of type "LanguageType"
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

// don't make any changes to LanguageType`
type LanguageType = "en" | "es" | "fr" | "tr";

function printHello(name: string, language: LanguageType): void {
  // write your code here
  if (language == "en") {
    console.log("Hello " + name);
  } else if (language == "es") {
    console.log("Hola " + name);
  } else if (language == "fr") {
    console.log("Bonjour " + name);
  } else {
    console.log("Merhaba " + name);
  }
}

// example:
console.log(printHello("Aziz", "es")); // => "Hola Aziz"
console.log(printHello("Aziz", "fr")); // => "Bonjour Aziz"
console.log(printHello("Aziz", "en")); // => "Hello Aziz";
console.log(printHello("Aziz", "tr")); // => "Merhaba AZIZ";

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters (x and y)
 * - Accepts a "x" parameter of type "number"
 * - Accepts a "y" parameter of type "number"
 * - should print out the bigger number
 */
function printMax(x: number, y: number) {
  // write your code here
  console.log(Math.max(x, y));
  if (x > y) console.log(`${x} is greater than ${y}.`);
  else console.log(`${x} is smaller than ${y}.`);
}

// example:
console.log(printMax(4, 7)); // => 7

// don't touch me bro!
export { printName, printAge, printHello, printMax, LanguageType };

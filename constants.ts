import { Slide, SlideType } from './types';

export const BASIC_SLIDES: Slide[] = [
  {
    id: 'basic-intro',
    title: '1. Introduction to JS',
    type: SlideType.INTRO,
    content: `JavaScript is the programming language that powers the web. 
    
In this Basic Course, we will build a solid foundation. You don't need to know everything at once, just these core concepts.

**Topics:**
1. Variables & Data
2. Logic & Control Flow
3. Functions & Scope
4. Data Structures (Arrays/Objects)
5. **Deep Dive: DOM Manipulation**`,
    bullets: [
      "Runs natively in the browser",
      "Controls HTML structure and CSS styles",
      "Handles user interactions (clicks, typing)"
    ],
    defaultCode: `// Welcome to the class!
console.log("Hello, Class!");
console.log("Let's master the basics.");`
  },
  {
    id: 'variables',
    title: '2. Variables & Constants',
    type: SlideType.CONCEPT,
    content: `Variables are containers for storing data.

**Key Keywords:**
*   **\`let\`**: Use for values that will change (e.g., score, counter).
*   **\`const\`**: Use for values that should not change (e.g., API URL, Pi).
*   **\`var\`**: The old way. Avoid it because it has confusing scoping rules.`,
    bullets: [
      "Always prefer `const` by default.",
      "Switch to `let` only when you know the value changes.",
      "Variable names are case-sensitive (`myVar` ≠ `myvar`)."
    ],
    defaultCode: `const appName = "JS Master";
let currentScore = 0;

console.log("Welcome to " + appName);
console.log("Score:", currentScore);

currentScore = 10; // This is allowed
console.log("New Score:", currentScore);

// appName = "New Name"; // Error: Assignment to constant variable`
  },
  {
    id: 'types',
    title: '3. Data Types',
    type: SlideType.CONCEPT,
    content: `JavaScript variables can hold different types of data. You don't need to specify the type; JS figures it out automatically (Dynamic Typing).`,
    bullets: [
      "**String**: Text (`\"Hello\"`)",
      "**Number**: Math values (`42`, `3.5`, `-10`)",
      "**Boolean**: True/False logic (`true`, `false`)",
      "**Undefined**: A variable declared but not assigned."
    ],
    defaultCode: `let city = "New York";   // String
let temperature = 22.5;  // Number
let isRaining = false;   // Boolean
let unknown;             // Undefined

console.log(typeof city);
console.log(typeof temperature);
console.log("Is it raining?", isRaining);
console.log("Value of unknown:", unknown);`
  },
  {
    id: 'operators',
    title: '4. Operators',
    type: SlideType.CODE,
    content: `Operators allow us to manipulate values.

**Math**: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (Remainder)
**Shorthand**: \`+=\`, \`-=\`, \`++\` (Increment)
**Comparison**: \`===\` (Strict Equal), \`!==\` (Not Equal), \`>\`, \`<\``,
    bullets: [
      "Use `===` instead of `==` to avoid bugs.",
      "`%` is useful for finding even/odd numbers.",
      "`+` can also concatenate strings."
    ],
    defaultCode: `let count = 10;
count++; // Increment by 1
console.log("Count is 11:", count);

count += 5; // Add 5
console.log("Count is 16:", count);

let price = 20;
console.log("Is price 20?", price === 20);
console.log("Is price greater than 50?", price > 50);

console.log("Remainder of 10 / 3:", 10 % 3);`
  },
  {
    id: 'conditionals',
    title: '5. Conditional Logic',
    type: SlideType.CODE,
    content: `We use \`if\`, \`else if\`, and \`else\` to run specific code based on conditions.

We can combine conditions using Logical Operators:
*   **\`&&\` (AND)**: Both must be true.
*   **\`||\` (OR)**: At least one must be true.`,
    bullets: [
      "Code blocks `{}` only run if the condition is true.",
      "The program skips the rest once a condition is met."
    ],
    defaultCode: `let age = 16;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter the club.");
} else if (age >= 18 && !hasID) {
  console.log("You need your ID!");
} else {
  console.log("You are too young.");
}

// Simple check
let isWeekend = true;
if (isWeekend || age > 60) {
  console.log("You get a discount!");
}`
  },
  {
    id: 'loops',
    title: '6. Loops',
    type: SlideType.CODE,
    content: `Loops repeat a block of code. The \`for\` loop is the most common tool for this.

**Syntax**: \`for (start; stop-condition; step) { ... }\``,
    bullets: [
      "**i = 0**: Start at index 0.",
      "**i < 5**: Run as long as i is less than 5.",
      "**i++**: Increase i by 1 after each round."
    ],
    defaultCode: `// Basic counter
console.log("--- Counting Up ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

console.log("--- Counting Down ---");
for (let i = 10; i > 0; i -= 2) {
  console.log("T-Minus:", i);
}`
  },
  {
    id: 'functions',
    title: '7. Functions',
    type: SlideType.CODE,
    content: `Functions are reusable recipes for code. They take **Arguments** (inputs) and return a **Result** (output).

This prevents us from copying and pasting code.`,
    bullets: [
      "Define with `function name() {}`.",
      "Variables created *inside* a function are not visible outside (Local Scope)."
    ],
    defaultCode: `function calculateArea(width, height) {
  let area = width * height;
  return area;
}

let room1 = calculateArea(10, 10);
let room2 = calculateArea(5, 4);

console.log("Room 1 Area:", room1);
console.log("Room 2 Area:", room2);
console.log("Total:", room1 + room2);

// console.log(area); // Error! 'area' only exists inside the function.`
  },
  {
    id: 'scope',
    title: '8. Scope (Global vs Local)',
    type: SlideType.CONCEPT,
    content: `**Scope** determines where your variables are visible.

1.  **Global Scope**: Variables defined outside functions. Accessible everywhere.
2.  **Local (Function) Scope**: Variables defined inside a function. Only accessible there.
3.  **Block Scope**: Variables defined with \`let\`/\`const\` inside \`{}\` (like if-statements or loops).`,
    bullets: [
      "Always try to keep variables local to avoid conflicts.",
      "Blocks `{}` create a 'private' space for `let` and `const`."
    ],
    defaultCode: `let globalVar = "I am everywhere";

if (true) {
  let blockVar = "I am hidden inside this block";
  console.log("Inside block:", globalVar); // Works
  console.log("Inside block:", blockVar);  // Works
}

console.log("Outside:", globalVar); // Works
// console.log("Outside:", blockVar); // Error!`
  },
  {
    id: 'arrays',
    title: '9. Arrays',
    type: SlideType.CODE,
    content: `Arrays are ordered lists of data.

*   **Index**: The position of an item (starts at 0).
*   **Length**: How many items are in the list.`,
    bullets: [
      "`.push(item)`: Add to the end.",
      "`.pop()`: Remove the last item.",
      "`array[i]`: Access the item at position i."
    ],
    defaultCode: `let fruits = ["Apple", "Banana", "Cherry"];

console.log("First:", fruits[0]); // Apple
console.log("Last:", fruits[fruits.length - 1]); // Cherry

fruits.push("Mango");
console.log("Added Mango:", fruits);

let removed = fruits.pop();
console.log("Removed:", removed);
console.log("Remaining:", fruits);`
  },
  {
    id: 'objects',
    title: '10. Objects',
    type: SlideType.CODE,
    content: `Objects model real-world things using **Properties** (variables) and **Methods** (functions).

They use Key-Value pairs: \`key: value\`.`,
    bullets: [
      "Access with Dot Notation: `user.name`.",
      "Methods are functions attached to objects."
    ],
    defaultCode: `const player = {
  name: "Mario",
  lives: 3,
  powerUp: "Mushroom",
  sayHi: function() {
    return "It's me, " + this.name + "!";
  }
};

console.log(player.name);
console.log("Lives:", player.lives);

// Calling a method
console.log(player.sayHi());

// Modifying properties
player.lives = 0;
console.log("Game Over?", player.lives === 0);`
  },
  {
    id: 'dom-selection',
    title: '11. DOM: Selecting Elements',
    type: SlideType.CODE,
    content: `The **DOM** (Document Object Model) is the bridge between JS and HTML.

To change something, you first need to **Select** it.`,
    bullets: [
      "`document.getElementById('id')`: Best for unique elements.",
      "`document.querySelector('.class')`: Selects the first match (CSS syntax).",
      "`.innerText`: Changes text content.",
      "`.innerHTML`: Changes HTML content (be careful with security)."
    ],
    defaultCode: `// 1. Select the sandbox element
const box = document.getElementById("sandbox");

// 2. Change simple text
// box.innerText = "Hello World";

// 3. Or inject HTML
box.innerHTML = \`
  <h2 style="margin:0">JavaScript Magic</h2>
  <p>I was created by code!</p>
\`;

console.log("Content updated.");`
  },
  {
    id: 'dom-styling',
    title: '12. DOM: Changing Styles',
    type: SlideType.CODE,
    content: `You can change CSS via JavaScript using the \`.style\` property.

Note: CSS properties with hyphens (like \`background-color\`) become **camelCase** in JS (like \`backgroundColor\`).`,
    bullets: [
      "`element.style.color`",
      "`element.style.backgroundColor`",
      "`element.style.fontSize`",
      "`element.style.display = 'none'` (hides element)"
    ],
    defaultCode: `const box = document.getElementById("sandbox");

// Reset content
box.innerText = "Look at my style!";

// Apply styles
box.style.backgroundColor = "#4f46e5"; // Indigo 600
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "12px";
box.style.textAlign = "center";
box.style.fontSize = "24px";
box.style.fontFamily = "sans-serif";
box.style.border = "4px solid #312e81";`
  },
  {
    id: 'dom-events',
    title: '13. DOM: Events',
    type: SlideType.CODE,
    content: `This is where the magic happens. **Events** let your code react to user actions.

Common Events: \`click\`, \`mouseover\`, \`input\`, \`keydown\`.

We use \`.addEventListener('event', function)\`.`,
    bullets: [
      "Step 1: Create/Select element.",
      "Step 2: Attach Listener.",
      "Step 3: Define what happens."
    ],
    defaultCode: `const box = document.getElementById("sandbox");

// Create a button dynamically
box.innerHTML = \`
  <p id="msg">Click the button below:</p>
  <button id="myBtn" style="padding: 8px 16px; background: white; border: none; border-radius: 4px; cursor: pointer;">
    Click Me
  </button>
\`;

// Select the new button
const btn = document.getElementById("myBtn");
const msg = document.getElementById("msg");

// Add interaction
btn.addEventListener("click", function() {
  msg.innerText = "You clicked it! Good job.";
  box.style.backgroundColor = "#059669"; // Green
});`
  }
];

export const ES6_SLIDES: Slide[] = [
  {
    id: 'es6-intro',
    title: '1. Modern JS (ES6+)',
    type: SlideType.INTRO,
    content: `Welcome to the advanced module! 
    
**ES6 (ECMAScript 2015)** was a major update to JavaScript. It introduced syntax that makes code cleaner and more powerful.`,
    bullets: [
      "Arrow Functions",
      "Template Literals",
      "Destructuring",
      "Async/Await"
    ],
    defaultCode: `// Old vs New
// ES5
var oldWay = function() { return 'Old'; };

// ES6
const newWay = () => 'New';

console.log(newWay());`
  },
  {
    id: 'template-literals',
    title: '2. Template Literals',
    type: SlideType.CODE,
    content: `Template literals allow embedded expressions and multi-line strings using backticks (\`).`,
    bullets: [
      "Use `${variable}` to insert values",
      "No more clumsy `+` concatenation"
    ],
    defaultCode: `const user = "Alice";
const age = 25;

// Old way
console.log("User " + user + " is " + age + " years old.");

// ES6 Way
console.log(\`User \${user} is \${age} years old.\`);

const multiLine = \`This is line 1
This is line 2\`;
console.log(multiLine);`
  },
  {
    id: 'arrow-functions',
    title: '3. Arrow Functions',
    type: SlideType.CODE,
    content: `Arrow functions provide a shorter syntax for writing function expressions.`,
    bullets: [
      "Removes the `function` keyword",
      "Implicit return for one-liners"
    ],
    defaultCode: `// Standard function
const add = (a, b) => {
  return a + b;
};

// Implicit return (One Liner)
const double = n => n * 2;

console.log(add(5, 3));
console.log(double(10));`
  },
  {
    id: 'destructuring',
    title: '4. Destructuring',
    type: SlideType.CODE,
    content: `Destructuring makes it easy to unpack values from arrays or properties from objects into distinct variables.`,
    bullets: [
      "Object Destructuring: `{ key } = obj`",
      "Array Destructuring: `[ item1, item2 ] = array`"
    ],
    defaultCode: `const person = { name: "Bob", role: "Developer", city: "New York" };

// Extracting values
const { name, role } = person;
console.log(name, "is a", role);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log("First number:", first);`
  },
  {
    id: 'array-methods',
    title: '5. Map & Filter',
    type: SlideType.CODE,
    content: `Modern array methods let you transform data cleanly without manual loops.`,
    bullets: [
      "`.map()`: Transform items",
      "`.filter()`: Select items"
    ],
    defaultCode: `const prices = [10, 20, 30, 40];

// Discount everything by 50%
const salePrices = prices.map(price => price * 0.5);
console.log("Sale:", salePrices);

// Find expensive items (> 15)
const expensive = salePrices.filter(p => p > 15);
console.log("Expensive items:", expensive);`
  },
  {
    id: 'classes',
    title: '6. Classes',
    type: SlideType.CODE,
    content: `Classes are syntactic sugar over JavaScript's prototype-based inheritance.`,
    bullets: [
      "`class Name { ... }`",
      "`constructor()` for initialization",
      "Methods are defined inside the class body"
    ],
    defaultCode: `class Robot {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`Beep boop, I am \${this.name}\`;
  }
}

const bot = new Robot("R2-D2");
console.log(bot.speak());`
  },
  {
    id: 'promises',
    title: '7. Promises & Async/Await',
    type: SlideType.CODE,
    content: `Handling asynchronous operations (like fetching data) is cleaner with Promises and Async/Await.`,
    bullets: [
      "`async` functions return a promise",
      "`await` pauses execution until data is ready"
    ],
    defaultCode: `const fakeApiCall = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded!"), 1500);
  });
};

async function getData() {
  console.log("Fetching...");
  const data = await fakeApiCall();
  console.log(data);
}

getData();`
  }
];

// Default export if needed, or just named exports used in App
export const SLIDES = BASIC_SLIDES;
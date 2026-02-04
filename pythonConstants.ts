import { Slide, SlideType, Language } from './types';

export const PYTHON_BASIC_SLIDES: Slide[] = [
  {
    id: 'python-intro',
    title: '1. Introduction to Python',
    type: SlideType.INTRO,
    language: Language.PYTHON,
    content: `Welcome to Python! 🐍

Python is one of the most popular and beginner-friendly programming languages in the world. Created by Guido van Rossum in 1991, it's known for its clean, readable syntax.

**Why Learn Python?**
- Easy to read and write (like plain English)
- Huge community and tons of libraries
- Used in Web Development, AI, Data Science, Automation
- High demand in the job market

**Setting Up Python:**
1. Download from python.org
2. Install (check "Add to PATH" on Windows)
3. Open terminal/command prompt
4. Type \`python --version\` to verify`,
    bullets: [
      "Python uses **indentation** (spaces) instead of braces {}",
      "No semicolons needed at the end of lines",
      "Files use the **.py** extension",
      "Run with: `python filename.py`"
    ],
    defaultCode: `# Your first Python program!
# This is a comment - Python ignores it

print("Hello, World!")
print("Welcome to Python Masterclass!")

# You can print multiple things
name = "Student"
print("Hello,", name)`,
    expectedOutput: `Hello, World!
Welcome to Python Masterclass!
Hello, Student`
  },
  {
    id: 'python-variables',
    title: '2. Variables & Data Types',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Variables** are containers that store data. In Python, you don't need to declare the type - Python figures it out automatically!

**Naming Rules:**
- Start with a letter or underscore
- Can contain letters, numbers, underscores
- Case-sensitive (\`name\` ≠ \`Name\`)
- Use snake_case for variable names (Python convention)

**Basic Data Types:**
| Type | Example | Description |
|------|---------|-------------|
| \`int\` | 42 | Whole numbers |
| \`float\` | 3.14 | Decimal numbers |
| \`str\` | "Hello" | Text (strings) |
| \`bool\` | True/False | Boolean values |`,
    bullets: [
      "Use `type(variable)` to check a variable's type",
      "Strings can use single ' or double \" quotes",
      "Boolean values are `True` and `False` (capitalized!)",
      "Python is **dynamically typed** - types can change"
    ],
    defaultCode: `# Creating variables (no type declaration needed!)
age = 25                    # int (integer)
price = 19.99              # float (decimal)
name = "Ahmed"             # str (string)
is_student = True          # bool (boolean)

# Check the type of each variable
print("age:", age, "- Type:", type(age))
print("price:", price, "- Type:", type(price))
print("name:", name, "- Type:", type(name))
print("is_student:", is_student, "- Type:", type(is_student))

# Variables can be reassigned
age = 26
print("Updated age:", age)`,
    expectedOutput: `age: 25 - Type: <class 'int'>
price: 19.99 - Type: <class 'float'>
name: Ahmed - Type: <class 'str'>
is_student: True - Type: <class 'bool'>
Updated age: 26`,
    realWorldExample: `Imagine a registration form: name (string), age (integer), email (string), has_account (boolean). Each piece of data needs the right type!`
  },
  {
    id: 'python-strings',
    title: '3. String Operations',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Strings are sequences of characters. Python provides powerful tools to work with text.

**Creating Strings:**
- Single quotes: \`'Hello'\`
- Double quotes: \`"Hello"\`
- Triple quotes for multi-line: \`'''Hello'''\`

**f-Strings (Formatted Strings):**
The modern way to insert variables into strings. Use \`f"...{variable}..."\``,
    bullets: [
      "`.upper()` / `.lower()` - Change case",
      "`.strip()` - Remove whitespace from both ends",
      "`.replace(old, new)` - Replace text",
      "`.split(separator)` - Break into a list",
      "`len(string)` - Get the length"
    ],
    defaultCode: `# String basics
greeting = "Hello, Python!"
print("Original:", greeting)
print("Length:", len(greeting))

# Case methods
print("Uppercase:", greeting.upper())
print("Lowercase:", greeting.lower())

# f-Strings (VERY important!)
name = "Sara"
age = 22
message = f"My name is {name} and I am {age} years old."
print(message)

# String methods
text = "  Hello World  "
print("Stripped:", text.strip())
print("Replace:", greeting.replace("Python", "World"))

# Splitting strings
fruits = "apple,banana,cherry"
fruit_list = fruits.split(",")
print("Split result:", fruit_list)`,
    expectedOutput: `Original: Hello, Python!
Length: 14
Uppercase: HELLO, PYTHON!
Lowercase: hello, python!
My name is Sara and I am 22 years old.
Stripped: Hello World
Replace: Hello, World!
Split result: ['apple', 'banana', 'cherry']`
  },
  {
    id: 'python-operators',
    title: '4. Operators',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Operators perform actions on values. Python has several types of operators.

**Arithmetic Operators:**
\`+\` Add, \`-\` Subtract, \`*\` Multiply, \`/\` Divide
\`//\` Floor Division, \`%\` Modulus (remainder), \`**\` Power

**Comparison Operators:**
\`==\` Equal, \`!=\` Not Equal, \`>\` Greater, \`<\` Less
\`>=\` Greater or Equal, \`<=\` Less or Equal

**Assignment Operators:**
\`=\` Assign, \`+=\` Add and assign, \`-=\` Subtract and assign`,
    bullets: [
      "`/` always returns a float (10/2 = 5.0)",
      "`//` returns integer division (10//3 = 3)",
      "`%` is great for checking even/odd numbers",
      "`**` is for exponents (2**3 = 8)"
    ],
    defaultCode: `# Arithmetic operators
a = 10
b = 3

print("Addition:", a + b)       # 13
print("Subtraction:", a - b)    # 7
print("Multiplication:", a * b) # 30
print("Division:", a / b)       # 3.333...
print("Floor Division:", a // b) # 3
print("Modulus:", a % b)        # 1
print("Power:", a ** b)         # 1000

# Comparison operators
x = 5
print("x == 5:", x == 5)   # True
print("x != 3:", x != 3)   # True
print("x > 3:", x > 3)     # True

# Assignment shortcuts
count = 0
count += 1  # Same as: count = count + 1
print("Count:", count)

# Check even or odd
number = 7
if number % 2 == 0:
    print(number, "is even")
else:
    print(number, "is odd")`,
    expectedOutput: `Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3.3333333333333335
Floor Division: 3
Modulus: 1
Power: 1000
x == 5: True
x != 3: True
x > 3: True
Count: 1
7 is odd`
  },
  {
    id: 'python-input-output',
    title: '5. Input & Output',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Output with print():**
The \`print()\` function displays information to the console.

**Input with input():**
The \`input()\` function pauses the program and waits for user input. It always returns a **string**, so you need to convert it for numbers!`,
    bullets: [
      "`print()` can take multiple arguments separated by commas",
      "`input(prompt)` shows a message before waiting",
      "Use `int()` to convert input to integer",
      "Use `float()` to convert input to decimal"
    ],
    defaultCode: `# Basic output
print("Welcome to the program!")

# Print multiple values
name = "Python"
version = 3.11
print("Language:", name, "Version:", version)

# Print with formatting
print(f"Using {name} version {version}")

# Getting user input
# Note: Run this locally to test input!
user_name = input("What is your name? ")
print(f"Hello, {user_name}!")

# Converting input to numbers
age_str = input("Enter your age: ")
age = int(age_str)  # Convert string to integer
print(f"Next year you'll be {age + 1}")

# One-liner conversion
price = float(input("Enter price: "))
print(f"With tax: {price * 1.1:.2f}")`,
    expectedOutput: `Welcome to the program!
Language: Python Version: 3.11
Using Python version 3.11
What is your name? Ahmed
Hello, Ahmed!
Enter your age: 25
Next year you'll be 26
Enter price: 100
With tax: 110.00`,
    realWorldExample: `Every application needs user interaction! Login forms, calculators, games, surveys - all use input/output concepts.`
  },
  {
    id: 'python-comments',
    title: '6. Comments & Documentation',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `Comments are notes for humans - Python ignores them completely. Good comments make code easier to understand and maintain.

**Types of Comments:**
1. **Single-line**: Start with \`#\`
2. **Multi-line**: Use triple quotes \`'''\` or \`"""\`
3. **Docstrings**: Special comments that document functions/classes`,
    bullets: [
      "Comments explain **why**, not what (code shows what)",
      "Docstrings are accessible via `help()` function",
      "Use comments to explain complex logic",
      "Don't over-comment obvious code"
    ],
    defaultCode: `# This is a single-line comment

# You can have multiple single-line comments
# stacked together like this

"""
This is a multi-line comment.
It can span several lines.
Useful for longer explanations.
"""

def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Parameters:
        width (float): The width of the rectangle
        height (float): The height of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return width * height

# Using the function
area = calculate_area(10, 5)
print(f"Area: {area}")

# You can access the docstring!
print("\\nFunction documentation:")
help(calculate_area)`,
    expectedOutput: `Area: 50

Function documentation:
Help on function calculate_area...`
  },
  {
    id: 'python-type-conversion',
    title: '7. Type Conversion',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Sometimes you need to convert data from one type to another. This is called **type casting** or **type conversion**.

**Common Conversions:**
- \`int()\` - Convert to integer
- \`float()\` - Convert to decimal
- \`str()\` - Convert to string
- \`bool()\` - Convert to boolean
- \`list()\` - Convert to list`,
    bullets: [
      "`int('42')` works, but `int('42.5')` fails! Use `int(float('42.5'))`",
      "`bool()` returns False for: 0, '', None, [], {}",
      "String to int/float must contain valid numbers only",
      "Any non-zero number converts to True"
    ],
    defaultCode: `# String to Number
age_str = "25"
age = int(age_str)
print(f"Age + 5 = {age + 5}")

price_str = "19.99"
price = float(price_str)
print(f"Price with tax: {price * 1.1}")

# Number to String
count = 42
message = "You have " + str(count) + " items"
print(message)

# Boolean conversions
print("\\nBoolean conversions:")
print("bool(1):", bool(1))       # True
print("bool(0):", bool(0))       # False
print("bool(''):", bool(''))     # False (empty string)
print("bool('Hi'):", bool('Hi')) # True
print("bool([]):", bool([]))     # False (empty list)
print("bool([1,2]):", bool([1,2])) # True

# Float to Int (truncates, doesn't round!)
decimal = 9.8
whole = int(decimal)
print(f"\\nint(9.8) = {whole}")  # 9, not 10!`,
    expectedOutput: `Age + 5 = 30
Price with tax: 21.989
You have 42 items

Boolean conversions:
bool(1): True
bool(0): False
bool(''): False
bool('Hi'): True
bool([]): False
bool([1,2]): True

int(9.8) = 9`
  },
  {
    id: 'python-math',
    title: '8. Math Operations',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python has built-in math capabilities and a powerful \`math\` module for advanced operations.

**Built-in Functions:**
- \`abs()\` - Absolute value
- \`round()\` - Round a number
- \`min()\` / \`max()\` - Find smallest/largest
- \`sum()\` - Add up a list of numbers

**Math Module:**
Import with \`import math\` for constants and functions like pi, sqrt, ceil, floor.`,
    bullets: [
      "`round(3.5)` rounds to 4, `round(3.14159, 2)` gives 3.14",
      "`math.ceil()` always rounds up, `math.floor()` always rounds down",
      "`math.pi` gives 3.14159..., `math.e` gives Euler's number",
      "Use `random` module for random numbers"
    ],
    defaultCode: `import math
import random

# Built-in math functions
print("abs(-5):", abs(-5))
print("round(3.7):", round(3.7))
print("round(3.14159, 2):", round(3.14159, 2))

numbers = [4, 1, 9, 3, 7]
print("min:", min(numbers))
print("max:", max(numbers))
print("sum:", sum(numbers))

# Math module
print("\\nMath module:")
print("math.pi:", math.pi)
print("math.sqrt(16):", math.sqrt(16))
print("math.ceil(3.2):", math.ceil(3.2))   # 4
print("math.floor(3.9):", math.floor(3.9)) # 3
print("math.pow(2, 3):", math.pow(2, 3))   # 8.0

# Random numbers (useful for games!)
print("\\nRandom numbers:")
print("Random 1-10:", random.randint(1, 10))
print("Random choice:", random.choice(["apple", "banana", "cherry"]))`,
    expectedOutput: `abs(-5): 5
round(3.7): 4
round(3.14159, 2): 3.14
min: 1
max: 9
sum: 24

Math module:
math.pi: 3.141592653589793
math.sqrt(16): 4.0
math.ceil(3.2): 4
math.floor(3.9): 3
math.pow(2, 3): 8.0

Random numbers:
Random 1-10: 7
Random choice: banana`
  }
];

// Control Flow Slides (Module 2)
export const PYTHON_CONTROL_SLIDES: Slide[] = [
  {
    id: 'python-if',
    title: '9. If Statements',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Conditional statements** let your program make decisions. The \`if\` statement runs code only when a condition is True.

**Syntax:**
\`\`\`python
if condition:
    # code to run (indented!)
\`\`\`

**Important:** Python uses **indentation** (4 spaces) to define code blocks, not braces {}!`,
    bullets: [
      "Condition must evaluate to True or False",
      "The colon `:` after condition is required",
      "Code block MUST be indented (4 spaces recommended)",
      "Indentation errors are common for beginners!"
    ],
    defaultCode: `# Basic if statement
age = 18

if age >= 18:
    print("You are an adult!")
    print("You can vote.")

# This runs regardless (not indented under if)
print("Program continues...")

# Multiple conditions
temperature = 35

if temperature > 30:
    print("It's hot outside! 🌡️")

# Checking strings
password = "python123"

if password == "python123":
    print("Access granted! ✅")

if len(password) >= 8:
    print("Password length is good.")`,
    expectedOutput: `You are an adult!
You can vote.
Program continues...
It's hot outside! 🌡️
Access granted! ✅
Password length is good.`,
    realWorldExample: `Login systems: if username AND password match, grant access. Shopping carts: if total > 100, apply discount.`
  },
  {
    id: 'python-elif-else',
    title: '10. Elif & Else',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**elif** (else if) and **else** let you handle multiple conditions and default cases.

**Structure:**
\`\`\`python
if condition1:
    # runs if condition1 is True
elif condition2:
    # runs if condition1 is False AND condition2 is True
else:
    # runs if ALL conditions are False
\`\`\``,
    bullets: [
      "`elif` is short for 'else if'",
      "You can have as many `elif` blocks as needed",
      "`else` is optional and catches everything else",
      "Only ONE block runs (first True condition)"
    ],
    defaultCode: `# Grade calculator
score = 85

if score >= 90:
    grade = "A"
    print("Excellent! 🌟")
elif score >= 80:
    grade = "B"
    print("Great job! 👍")
elif score >= 70:
    grade = "C"
    print("Good work!")
elif score >= 60:
    grade = "D"
    print("You passed.")
else:
    grade = "F"
    print("Need improvement 📚")

print(f"Your grade: {grade}")

# Day of week example
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("\\n🎉 It's the weekend!")
else:
    print("\\n💼 It's a weekday.")

# Nested conditions
user_type = "admin"
is_active = True

if user_type == "admin":
    if is_active:
        print("\\nAdmin access granted!")
    else:
        print("\\nAdmin account is inactive.")`,
    expectedOutput: `Great job! 👍
Your grade: B

🎉 It's the weekend!

Admin access granted!`
  },
  {
    id: 'python-logical',
    title: '11. Logical Operators',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Logical operators** combine multiple conditions. They're essential for complex decision-making.

**The Three Operators:**
| Operator | Meaning | Example |
|----------|---------|---------|
| \`and\` | Both must be True | \`age > 18 and has_id\` |
| \`or\` | At least one True | \`is_admin or is_owner\` |
| \`not\` | Reverses True/False | \`not is_banned\` |`,
    bullets: [
      "`and` returns True only if BOTH conditions are True",
      "`or` returns True if AT LEAST ONE is True",
      "`not` flips True to False and vice versa",
      "Use parentheses for clarity: `(a and b) or c`"
    ],
    defaultCode: `# AND operator - both must be true
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive! 🚗")

# OR operator - at least one true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No work today! 🎉")

# NOT operator - reverses the boolean
is_logged_in = False

if not is_logged_in:
    print("Please log in first.")

# Combining operators
user_role = "member"
account_age = 365  # days

# Premium features: admin OR (member AND account > 30 days)
if user_role == "admin" or (user_role == "member" and account_age > 30):
    print("\\n✨ Premium features unlocked!")

# Practical example: Form validation
username = "john_doe"
password = "secure123"
confirm_password = "secure123"

if username and password and password == confirm_password:
    print("\\n✅ Registration successful!")
else:
    print("\\n❌ Please check your input.")`,
    expectedOutput: `You can drive! 🚗
No work today! 🎉
Please log in first.

✨ Premium features unlocked!

✅ Registration successful!`
  },
  {
    id: 'python-for-loops',
    title: '12. For Loops',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**For loops** iterate over sequences (lists, strings, ranges). They're perfect when you know what you want to loop through.

**Syntax:**
\`\`\`python
for item in sequence:
    # do something with item
\`\`\`

**range() Function:**
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(1, 6)\` → 1, 2, 3, 4, 5
- \`range(0, 10, 2)\` → 0, 2, 4, 6, 8`,
    bullets: [
      "`for` loops are best when iterating over collections",
      "`range(n)` generates numbers from 0 to n-1",
      "Use `enumerate()` to get both index and value",
      "Strings are iterable (loop through characters)"
    ],
    defaultCode: `# Loop through a list
fruits = ["apple", "banana", "cherry"]

print("Fruit list:")
for fruit in fruits:
    print(f"  - {fruit}")

# Using range()
print("\\nCounting 1 to 5:")
for i in range(1, 6):
    print(i, end=" ")  # end=" " prints on same line
print()  # New line

# Loop through string
print("\\nSpelling 'Python':")
for letter in "Python":
    print(letter, end="-")
print()

# enumerate() - get index AND value
print("\\nWith index:")
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

# Practical: Calculate sum
numbers = [10, 20, 30, 40, 50]
total = 0

for num in numbers:
    total += num

print(f"\\nSum of {numbers} = {total}")`,
    expectedOutput: `Fruit list:
  - apple
  - banana
  - cherry

Counting 1 to 5:
1 2 3 4 5 

Spelling 'Python':
P-y-t-h-o-n-

With index:
1. apple
2. banana
3. cherry

Sum of [10, 20, 30, 40, 50] = 150`
  },
  {
    id: 'python-while-loops',
    title: '13. While Loops',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**While loops** run as long as a condition is True. Use them when you don't know exactly how many iterations you need.

**Syntax:**
\`\`\`python
while condition:
    # code to repeat
    # make sure condition eventually becomes False!
\`\`\`

**⚠️ Warning:** If the condition never becomes False, you get an **infinite loop**!`,
    bullets: [
      "Use when you don't know the exact number of iterations",
      "Always update the condition variable inside the loop",
      "Ctrl+C can stop an infinite loop in the terminal",
      "Common pattern: `while True:` with `break` to exit"
    ],
    defaultCode: `# Basic countdown
print("Countdown:")
count = 5

while count > 0:
    print(count, end=" ")
    count -= 1  # IMPORTANT: update the variable!
print("Liftoff! 🚀")

# User input loop (common pattern)
print("\\n--- Number guessing game ---")
secret = 7
guess = 0
attempts = 0

# Simulating multiple guesses
guesses = [3, 5, 7]  # Simulated user input

for g in guesses:
    attempts += 1
    if g == secret:
        print(f"Correct! You got it in {attempts} tries!")
        break
    elif g < secret:
        print(f"Guess {g}: Too low!")
    else:
        print(f"Guess {g}: Too high!")

# Accumulator pattern
print("\\n--- Accumulator pattern ---")
total = 0
n = 1

while n <= 10:
    total += n
    n += 1

print(f"Sum of 1 to 10 = {total}")`,
    expectedOutput: `Countdown:
5 4 3 2 1 Liftoff! 🚀

--- Number guessing game ---
Guess 3: Too low!
Guess 5: Too low!
Correct! You got it in 3 tries!

--- Accumulator pattern ---
Sum of 1 to 10 = 55`
  },
  {
    id: 'python-loop-control',
    title: '14. Loop Control',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python provides special keywords to control loop execution:

**\`break\`** - Exit the loop immediately
**\`continue\`** - Skip to the next iteration
**\`pass\`** - Do nothing (placeholder)
**\`else\`** - Runs if loop completes without break`,
    bullets: [
      "`break` exits only the innermost loop",
      "`continue` skips the rest of current iteration",
      "`pass` is useful when you need empty code blocks",
      "Loop `else` runs when loop finishes normally (no break)"
    ],
    defaultCode: `# break - exit when found
print("Finding first even number:")
numbers = [1, 3, 5, 4, 7, 9]

for num in numbers:
    if num % 2 == 0:
        print(f"Found: {num}")
        break
    print(f"Checking {num}...")

# continue - skip odd numbers
print("\\nEven numbers only:")
for i in range(1, 11):
    if i % 2 != 0:
        continue  # Skip odd numbers
    print(i, end=" ")
print()

# pass - placeholder for future code
for i in range(3):
    if i == 1:
        pass  # TODO: add special handling later
    print(f"Processing {i}")

# for-else (unique to Python!)
print("\\nSearching for 'x' in 'Python':")
for char in "Python":
    if char == 'x':
        print("Found 'x'!")
        break
else:
    # This runs because loop completed without break
    print("'x' was not found.")`,
    expectedOutput: `Finding first even number:
Checking 1...
Checking 3...
Checking 5...
Found: 4

Even numbers only:
2 4 6 8 10 

Processing 0
Processing 1
Processing 2

Searching for 'x' in 'Python':
'x' was not found.`
  }
];

// Data Structures Slides (Module 3)
export const PYTHON_DATA_SLIDES: Slide[] = [
  {
    id: 'python-lists',
    title: '15. Lists',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Lists** are ordered, mutable collections. They can hold any data type and are the most versatile data structure in Python.

**Creating Lists:**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\``,
    bullets: [
      "Indexing starts at 0 (first item is `list[0]`)",
      "Negative indexing: `list[-1]` is the last item",
      "Slicing: `list[1:4]` gets items from index 1 to 3",
      "Lists are **mutable** - you can change them"
    ],
    defaultCode: `# Creating and accessing lists
fruits = ["apple", "banana", "cherry", "date"]

print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
print("Slice [1:3]:", fruits[1:3])

# Modifying lists
fruits[0] = "apricot"  # Change item
print("After change:", fruits)

# Common list methods
fruits.append("elderberry")  # Add to end
print("After append:", fruits)

fruits.insert(1, "blueberry")  # Insert at index
print("After insert:", fruits)

removed = fruits.pop()  # Remove and return last
print(f"Popped: {removed}")
print("After pop:", fruits)

# List info
print(f"\\nLength: {len(fruits)}")
print(f"'cherry' in list: {'cherry' in fruits}")`,
    expectedOutput: `First fruit: apple
Last fruit: date
Slice [1:3]: ['banana', 'cherry']
After change: ['apricot', 'banana', 'cherry', 'date']
After append: ['apricot', 'banana', 'cherry', 'date', 'elderberry']
After insert: ['apricot', 'blueberry', 'banana', 'cherry', 'date', 'elderberry']
Popped: elderberry
After pop: ['apricot', 'blueberry', 'banana', 'cherry', 'date']

Length: 5
'cherry' in list: True`
  },
  {
    id: 'python-list-comprehensions',
    title: '16. List Comprehensions',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**List comprehensions** are a Pythonic way to create lists in a single line. They're more readable and often faster than loops.

**Syntax:**
\`[expression for item in iterable if condition]\``,
    bullets: [
      "Basic: `[x for x in range(5)]` → [0, 1, 2, 3, 4]",
      "Transform: `[x * 2 for x in list]`",
      "Filter: `[x for x in list if x > 0]`",
      "Combine: `[x * 2 for x in list if x > 0]`"
    ],
    defaultCode: `# Basic list comprehension
squares = [x ** 2 for x in range(1, 6)]
print("Squares:", squares)

# With condition (filter)
numbers = [1, -2, 3, -4, 5, -6]
positives = [n for n in numbers if n > 0]
print("Positives:", positives)

# Transform with condition
doubled_positives = [n * 2 for n in numbers if n > 0]
print("Doubled positives:", doubled_positives)

# String operations
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print("Uppercase:", upper_words)

# With if-else (transform all)
labels = ["even" if n % 2 == 0 else "odd" for n in range(1, 6)]
print("Labels:", labels)

# Practical: Extract emails
users = [
    {"name": "Ali", "email": "ali@example.com"},
    {"name": "Sara", "email": "sara@example.com"}
]
emails = [user["email"] for user in users]
print("Emails:", emails)`,
    expectedOutput: `Squares: [1, 4, 9, 16, 25]
Positives: [1, 3, 5]
Doubled positives: [2, 6, 10]
Uppercase: ['HELLO', 'WORLD', 'PYTHON']
Labels: ['odd', 'even', 'odd', 'even', 'odd']
Emails: ['ali@example.com', 'sara@example.com']`,
    realWorldExample: `Django uses this pattern often: extracting IDs from querysets, transforming data for APIs, filtering active users.`
  },
  {
    id: 'python-tuples',
    title: '17. Tuples',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Tuples** are ordered, **immutable** collections. Once created, they cannot be changed.

**Why Use Tuples?**
- Faster than lists
- Protect data from accidental changes
- Can be used as dictionary keys
- Perfect for returning multiple values from functions`,
    bullets: [
      "Create with parentheses: `(1, 2, 3)` or just `1, 2, 3`",
      "Single item tuple needs comma: `(1,)` not `(1)`",
      "Use **tuple unpacking** to extract values",
      "Common for coordinates, RGB colors, database records"
    ],
    defaultCode: `# Creating tuples
coordinates = (10, 20)
rgb_color = (255, 128, 0)
single = (42,)  # Note the comma!

print("Coordinates:", coordinates)
print("RGB:", rgb_color)

# Accessing elements (same as lists)
print(f"X: {coordinates[0]}, Y: {coordinates[1]}")

# Tuple unpacking (very Pythonic!)
x, y = coordinates
print(f"Unpacked: x={x}, y={y}")

r, g, b = rgb_color
print(f"Red: {r}, Green: {g}, Blue: {b}")

# Tuples are immutable!
# coordinates[0] = 5  # This would cause an error!

# Functions can return tuples
def get_user():
    return "Ali", 25, "ali@example.com"

name, age, email = get_user()
print(f"\\nUser: {name}, {age}, {email}")

# Tuple methods
numbers = (1, 2, 2, 3, 2, 4)
print(f"\\nCount of 2: {numbers.count(2)}")
print(f"Index of 3: {numbers.index(3)}")`,
    expectedOutput: `Coordinates: (10, 20)
RGB: (255, 128, 0)
X: 10, Y: 20
Unpacked: x=10, y=20
Red: 255, Green: 128, Blue: 0

User: Ali, 25, ali@example.com

Count of 2: 3
Index of 3: 3`
  },
  {
    id: 'python-dictionaries',
    title: '18. Dictionaries',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Dictionaries** store data as key-value pairs. They're essential for representing structured data like user profiles, settings, and API responses.

**Creating Dictionaries:**
\`\`\`python
user = {"name": "Ali", "age": 25}
\`\`\``,
    bullets: [
      "Keys must be unique and immutable (strings, numbers, tuples)",
      "Values can be any type including other dicts",
      "Access with `dict[key]` or `dict.get(key)`",
      "Use `.get()` to avoid KeyError with missing keys"
    ],
    defaultCode: `# Creating a dictionary
user = {
    "name": "Ali",
    "age": 25,
    "email": "ali@example.com",
    "is_active": True
}

print("User:", user)
print("Name:", user["name"])
print("Email:", user.get("email"))

# Safe access (returns None if missing)
print("Phone:", user.get("phone"))
print("Phone with default:", user.get("phone", "Not provided"))

# Adding and updating
user["phone"] = "123-456-7890"
user["age"] = 26
print("\\nUpdated:", user)

# Removing
del user["is_active"]
email = user.pop("email")
print("Removed email:", email)

# Looping through dictionaries
print("\\nAll entries:")
for key, value in user.items():
    print(f"  {key}: {value}")

# Common methods
print("\\nKeys:", list(user.keys()))
print("Values:", list(user.values()))`,
    expectedOutput: `User: {'name': 'Ali', 'age': 25, 'email': 'ali@example.com', 'is_active': True}
Name: Ali
Email: ali@example.com
Phone: None
Phone with default: Not provided

Updated: {'name': 'Ali', 'age': 26, 'email': 'ali@example.com', 'is_active': True, 'phone': '123-456-7890'}
Removed email: ali@example.com

All entries:
  name: Ali
  age: 26
  phone: 123-456-7890

Keys: ['name', 'age', 'phone']
Values: ['Ali', 26, '123-456-7890']`,
    realWorldExample: `Django Models return QuerySets that can be converted to dicts. REST APIs send/receive JSON which maps directly to Python dicts.`
  },
  {
    id: 'python-sets',
    title: '19. Sets',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Sets** are unordered collections of **unique** items. They automatically remove duplicates and are great for membership testing.

**Use Cases:**
- Remove duplicates from a list
- Check if items exist (very fast!)
- Find common or different items between collections`,
    bullets: [
      "Create with `{1, 2, 3}` or `set([1, 2, 2, 3])`",
      "No indexing (unordered) - can't do `set[0]`",
      "Empty set: `set()` not `{}` (that's an empty dict!)",
      "Set operations: union, intersection, difference"
    ],
    defaultCode: `# Creating sets
numbers = {1, 2, 3, 3, 2, 1}  # Duplicates removed!
print("Set:", numbers)

# From list (remove duplicates)
items = [1, 2, 2, 3, 3, 3, 4]
unique_items = set(items)
print("Unique:", unique_items)

# Adding and removing
unique_items.add(5)
unique_items.discard(1)  # No error if missing
print("Modified:", unique_items)

# Membership test (very fast!)
print("\\n3 in set:", 3 in unique_items)
print("10 in set:", 10 in unique_items)

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print("\\nSet A:", a)
print("Set B:", b)
print("Union (A | B):", a | b)          # All items
print("Intersection (A & B):", a & b)    # Common items
print("Difference (A - B):", a - b)      # In A, not in B

# Practical: Find common skills
job_requires = {"python", "django", "sql", "git"}
candidate_has = {"python", "javascript", "sql", "react"}

matching = job_requires & candidate_has
missing = job_requires - candidate_has
print(f"\\nMatching skills: {matching}")
print(f"Missing skills: {missing}")`,
    expectedOutput: `Set: {1, 2, 3}
Unique: {1, 2, 3, 4}
Modified: {2, 3, 4, 5}

3 in set: True
10 in set: False

Set A: {1, 2, 3, 4}
Set B: {3, 4, 5, 6}
Union (A | B): {1, 2, 3, 4, 5, 6}
Intersection (A & B): {3, 4}
Difference (A - B): {1, 2}

Matching skills: {'python', 'sql'}
Missing skills: {'git', 'django'}`
  },
  {
    id: 'python-nested',
    title: '20. Nested Data Structures',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Real-world data is often complex and **nested**. Lists can contain dicts, dicts can contain lists, and so on.

**Common Patterns:**
- List of dictionaries (database records)
- Dictionary with list values (grouped data)
- Nested dictionaries (hierarchical data)`,
    bullets: [
      "Access nested data with chained brackets: `data[0]['name']`",
      "Use loops to process lists of dicts",
      "Build complex structures step by step",
      "JSON data from APIs follows these patterns"
    ],
    defaultCode: `# List of dictionaries (like database records)
students = [
    {"id": 1, "name": "Ali", "grade": 85},
    {"id": 2, "name": "Sara", "grade": 92},
    {"id": 3, "name": "Omar", "grade": 78}
]

print("All students:")
for student in students:
    print(f"  {student['name']}: {student['grade']}")

# Find average grade
average = sum(s['grade'] for s in students) / len(students)
print(f"Average grade: {average:.1f}")

# Dictionary with list values
courses = {
    "CS101": ["Ali", "Sara", "Omar"],
    "MATH201": ["Sara", "Fatima"],
    "ENG101": ["Ali", "Fatima", "Omar"]
}

print("\\nCourse enrollment:")
for course, enrolled in courses.items():
    print(f"  {course}: {len(enrolled)} students")

# Nested dictionaries (API response style)
api_response = {
    "status": "success",
    "data": {
        "user": {
            "id": 1,
            "name": "Ali",
            "profile": {
                "bio": "Python developer",
                "location": "Dubai"
            }
        }
    }
}

# Accessing nested data
user_name = api_response["data"]["user"]["name"]
user_bio = api_response["data"]["user"]["profile"]["bio"]
print(f"\\nUser: {user_name}")
print(f"Bio: {user_bio}")`,
    expectedOutput: `All students:
  Ali: 85
  Sara: 92
  Omar: 78
Average grade: 85.0

Course enrollment:
  CS101: 3 students
  MATH201: 2 students
  ENG101: 3 students

User: Ali
Bio: Python developer`,
    realWorldExample: `Django REST Framework returns data exactly like this! API endpoints return nested JSON that maps to these Python structures.`
  }
];

// Functions Slides (Module 4)
export const PYTHON_FUNCTION_SLIDES: Slide[] = [
  {
    id: 'python-functions-basic',
    title: '21. Defining Functions',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Functions** are reusable blocks of code. They help you organize your code and avoid repetition.

Use the def keyword to define a function, give it a name, optional parameters, and a code block.`,
    bullets: [
      "Use def keyword to define a function",
      "Function names follow snake_case convention",
      "Parameters are optional",
      "Use return to send back a value"
    ],
    defaultCode: `# Basic function (no parameters, no return)
def greet():
    print("Hello, World!")

greet()  # Call the function

# Function with parameter
def greet_user(name):
    print(f"Hello, {name}!")

greet_user("Ali")

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")`,
    expectedOutput: `Hello, World!
Hello, Ali!
5 + 3 = 8`
  },
  {
    id: 'python-parameters',
    title: '22. Function Parameters',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python functions support various parameter types for flexibility.

**Parameter Types:**
- Positional: Order matters
- Keyword: Named arguments
- Default: Have fallback values
- *args: Variable positional args
- **kwargs: Variable keyword args`,
    bullets: [
      "Default parameters must come after required ones",
      "*args collects extra positional args as a tuple",
      "**kwargs collects extra keyword args as a dict",
      "Use descriptive parameter names"
    ],
    defaultCode: `# Default parameters
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Ali")           # Uses default
greet("Sara", "Hi")    # Override default

# *args - variable number of arguments
def add_all(*numbers):
    return sum(numbers)

print("Sum:", add_all(1, 2, 3, 4, 5))

# **kwargs - keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"  {key}: {value}")

print("User info:")
print_info(name="Ali", age=25, city="Dubai")`,
    expectedOutput: `Hello, Ali!
Hi, Sara!
Sum: 15
User info:
  name: Ali
  age: 25
  city: Dubai`,
    realWorldExample: `Django views use *args and **kwargs extensively. Form validation functions often have optional parameters.`
  },
  {
    id: 'python-return',
    title: '23. Return Values',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Functions can return values using the return statement. Without return, functions return None.

**Key Points:**
- Return immediately exits the function
- Can return any data type
- Can return multiple values (as tuple)`,
    bullets: [
      "Functions without return give None",
      "Multiple values returned as a tuple",
      "Use tuple unpacking to get values",
      "Early return for validation is common"
    ],
    defaultCode: `# Single return value
def square(n):
    return n * n

print("Square of 5:", square(5))

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

nums = [3, 1, 4, 1, 5, 9, 2, 6]
minimum, maximum = min_max(nums)
print(f"Min: {minimum}, Max: {maximum}")

# Early return for validation
def divide(a, b):
    if b == 0:
        return "Cannot divide by zero!"
    return a / b

print("10 / 2 =", divide(10, 2))
print("10 / 0 =", divide(10, 0))`,
    expectedOutput: `Square of 5: 25
Min: 1, Max: 9
10 / 2 = 5.0
10 / 0 = Cannot divide by zero!`
  },
  {
    id: 'python-scope',
    title: '24. Variable Scope',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Scope** determines where a variable can be accessed. Python has four scope levels (LEGB rule).

**Scope Levels:**
1. Local: Inside current function
2. Enclosing: Inside enclosing functions
3. Global: At module level
4. Built-in: Python built-in names`,
    bullets: [
      "Local variables exist only inside their function",
      "Use global keyword to modify global vars (avoid!)",
      "Functions have their own namespace",
      "Avoid global variables when possible"
    ],
    defaultCode: `# Global vs Local scope
message = "I'm global"

def show_message():
    message = "I'm local"
    print("Inside function:", message)

show_message()
print("Outside function:", message)

# Enclosing scope (nested functions)
def outer():
    outer_var = "outer"
    
    def inner():
        print("Inner sees:", outer_var)
    
    inner()

print("Nested function:")
outer()`,
    expectedOutput: `Inside function: I'm local
Outside function: I'm global
Nested function:
Inner sees: outer`
  },
  {
    id: 'python-lambda',
    title: '25. Lambda Functions',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Lambda** functions are small, anonymous functions defined in one line.

Syntax: lambda parameters: expression

Great for simple operations that you need only once.`,
    bullets: [
      "Lambda can only have ONE expression",
      "Automatically returns the result",
      "Often used with map(), filter(), sorted()",
      "Keep them simple - use def for complex logic"
    ],
    defaultCode: `# Basic lambda
square = lambda x: x * x
print("Square of 5:", square(5))

# With sorted() - custom sorting
students = [
    {"name": "Ali", "grade": 85},
    {"name": "Sara", "grade": 92},
    {"name": "Omar", "grade": 78}
]

by_grade = sorted(students, key=lambda s: s["grade"])
print("By grade:")
for s in by_grade:
    print(f"  {s['name']}: {s['grade']}")

# With filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", evens)`,
    expectedOutput: `Square of 5: 25
By grade:
  Omar: 78
  Ali: 85
  Sara: 92
Even numbers: [2, 4, 6, 8, 10]`,
    realWorldExample: `Django querysets use lambda-like expressions. Sorting API responses, filtering lists - all common uses.`
  },
  {
    id: 'python-decorators',
    title: '26. Decorators (Intro)',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Decorators** are functions that modify other functions. They are powerful and used extensively in Django.

Use @decorator syntax above a function definition.`,
    bullets: [
      "Decorators wrap functions to extend behavior",
      "@ syntax is syntactic sugar for cleaner code",
      "Django uses @login_required, @permission_required",
      "You can create your own decorators"
    ],
    defaultCode: `# Simple decorator example
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@debug
def add(a, b):
    return a + b

@debug
def greet(name):
    return f"Hello, {name}!"

print("--- Testing add ---")
add(5, 3)

print("--- Testing greet ---")
greet("Ali")`,
    expectedOutput: `--- Testing add ---
Calling add
add returned: 8
--- Testing greet ---
Calling greet
greet returned: Hello, Ali!`,
    realWorldExample: `Django is full of decorators! @login_required, @csrf_exempt, @require_http_methods, @cache_page, and many more.`
  }
];

// OOP Slides (Module 5)
export const PYTHON_OOP_SLIDES: Slide[] = [
  {
    id: 'python-classes',
    title: '27. Classes & Objects',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Object-Oriented Programming (OOP)** lets you model real-world things as classes. A class is a blueprint, an object is an instance of that blueprint.

**Key Terms:**
- Class: The blueprint
- Object: An instance of a class
- Attribute: Data stored in the object
- Method: Function inside a class`,
    bullets: [
      "Class names use PascalCase (ClassName)",
      "__init__ method runs when creating an object",
      "self refers to the current instance",
      "Access attributes with dot notation: obj.attribute"
    ],
    defaultCode: `# Define a class
class Dog:
    # Constructor - runs when object is created
    def __init__(self, name, breed):
        self.name = name    # Instance attribute
        self.breed = breed
    
    # Instance method
    def bark(self):
        print(f"{self.name} says: Woof!")
    
    def describe(self):
        print(f"{self.name} is a {self.breed}")

# Create objects (instances)
dog1 = Dog("Max", "Golden Retriever")
dog2 = Dog("Bella", "German Shepherd")

# Access attributes
print("Dog 1:", dog1.name)
print("Dog 2:", dog2.name)

# Call methods
dog1.bark()
dog2.describe()`,
    expectedOutput: `Dog 1: Max
Dog 2: Bella
Max says: Woof!
Bella is a German Shepherd`,
    realWorldExample: `Django Models are classes! Each model class represents a database table, and each instance is a row.`
  },
  {
    id: 'python-class-attributes',
    title: '28. Class vs Instance Attributes',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python classes have two types of attributes:

**Instance Attributes:** Unique to each object (defined in __init__)
**Class Attributes:** Shared by all instances (defined in class body)`,
    bullets: [
      "Instance attributes: different for each object",
      "Class attributes: shared by all objects",
      "Access class attrs via ClassName.attribute or instance",
      "Use class attributes for defaults or constants"
    ],
    defaultCode: `class Employee:
    # Class attribute - shared by all
    company = "TechCorp"
    employee_count = 0
    
    def __init__(self, name, position):
        # Instance attributes - unique to each
        self.name = name
        self.position = position
        Employee.employee_count += 1
    
    def display(self):
        print(f"{self.name} - {self.position} at {self.company}")

# Create employees
emp1 = Employee("Ali", "Developer")
emp2 = Employee("Sara", "Designer")
emp3 = Employee("Omar", "Manager")

# Access instance attributes
emp1.display()
emp2.display()

# Access class attribute
print(f"Company: {Employee.company}")
print(f"Total employees: {Employee.employee_count}")`,
    expectedOutput: `Ali - Developer at TechCorp
Sara - Designer at TechCorp
Company: TechCorp
Total employees: 3`
  },
  {
    id: 'python-inheritance',
    title: '29. Inheritance',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Inheritance** allows a class to inherit attributes and methods from another class.

**Parent (Base) Class:** The class being inherited from
**Child (Derived) Class:** The class that inherits

Python supports single and multiple inheritance.`,
    bullets: [
      "Child class inherits all parent methods",
      "Use super() to call parent methods",
      "Override methods by redefining them",
      "Django models inherit from models.Model"
    ],
    defaultCode: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} makes a sound")

# Child class inherits from Animal
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)  # Call parent __init__
        self.color = color
    
    # Override parent method
    def speak(self):
        print(f"{self.name} says: Meow!")
    
    # Add new method
    def describe(self):
        print(f"{self.name} is a {self.color} cat")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} says: Woof!")

# Create instances
cat = Cat("Whiskers", "orange")
dog = Dog("Max")

cat.speak()
cat.describe()
dog.speak()`,
    expectedOutput: `Whiskers says: Meow!
Whiskers is a orange cat
Max says: Woof!`,
    realWorldExample: `Django: class Post(models.Model) inherits from Model. Your custom views inherit from View or generic views.`
  },
  {
    id: 'python-encapsulation',
    title: '30. Encapsulation',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Encapsulation** restricts direct access to some attributes. Python uses naming conventions:

- **Public:** normal_name (accessible everywhere)
- **Protected:** _single_underscore (internal use hint)
- **Private:** __double_underscore (name mangling)`,
    bullets: [
      "Python doesn't truly enforce private - it's by convention",
      "Use properties for controlled access",
      "_protected suggests internal use only",
      "__private uses name mangling to prevent access"
    ],
    defaultCode: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._account_type = "Savings"  # Protected (convention)
        self.__balance = balance    # Private (name mangled)
    
    # Property getter
    @property
    def balance(self):
        return self.__balance
    
    # Property setter with validation
    @balance.setter
    def balance(self, amount):
        if amount >= 0:
            self.__balance = amount
        else:
            print("Balance cannot be negative!")
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: {amount}")

# Create account
account = BankAccount("Ali", 1000)

# Access via property
print("Balance:", account.balance)

# Deposit
account.deposit(500)
print("New balance:", account.balance)

# Protected attribute (accessible but shouldn't use directly)
print("Type:", account._account_type)

# Validation in setter
account.balance = -100`,
    expectedOutput: `Balance: 1000
Deposited: 500
New balance: 1500
Type: Savings
Balance cannot be negative!`
  },
  {
    id: 'python-magic-methods',
    title: '31. Magic Methods',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Magic methods** (or dunder methods) are special methods with double underscores. They let you define how objects behave with operators and built-in functions.

Common magic methods:
- __str__: String representation
- __repr__: Developer representation
- __len__: len() function
- __eq__: Equality comparison`,
    bullets: [
      "__init__ is the most common magic method",
      "__str__ is for human-readable output",
      "__repr__ is for debugging",
      "Define __eq__ for custom equality"
    ],
    defaultCode: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    def __len__(self):
        return self.pages
    
    def __eq__(self, other):
        return self.title == other.title and self.author == other.author

# Create books
book1 = Book("Python 101", "Ali", 300)
book2 = Book("Python 101", "Ali", 300)
book3 = Book("Django Guide", "Sara", 450)

# __str__ - print(object)
print("String:", book1)

# __repr__ - for debugging
print("Repr:", repr(book1))

# __len__ - len(object)
print("Pages:", len(book1))

# __eq__ - comparison
print("book1 == book2:", book1 == book2)
print("book1 == book3:", book1 == book3)`,
    expectedOutput: `String: Python 101 by Ali
Repr: Book('Python 101', 'Ali', 300)
Pages: 300
book1 == book2: True
book1 == book3: False`
  },
  {
    id: 'python-static-class-methods',
    title: '32. Static & Class Methods',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python has three types of methods:

**Instance methods:** Work with instance (self)
**Class methods:** Work with class (@classmethod)  
**Static methods:** No access to self or cls (@staticmethod)`,
    bullets: [
      "Instance methods: first param is self",
      "Class methods: first param is cls (the class)",
      "Static methods: no automatic params",
      "Use @classmethod for alternative constructors"
    ],
    defaultCode: `class DateUtil:
    default_format = "%Y-%m-%d"
    
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day
    
    # Instance method
    def display(self):
        print(f"{self.year}-{self.month:02d}-{self.day:02d}")
    
    # Class method - alternative constructor
    @classmethod
    def from_string(cls, date_string):
        year, month, day = map(int, date_string.split("-"))
        return cls(year, month, day)
    
    # Static method - utility function
    @staticmethod
    def is_valid_date(year, month, day):
        return 1 <= month <= 12 and 1 <= day <= 31

# Using instance method
date1 = DateUtil(2024, 1, 15)
date1.display()

# Using class method
date2 = DateUtil.from_string("2024-06-20")
date2.display()

# Using static method (no instance needed)
print("Valid date:", DateUtil.is_valid_date(2024, 2, 30))
print("Valid date:", DateUtil.is_valid_date(2024, 13, 1))`,
    expectedOutput: `2024-01-15
2024-06-20
Valid date: True
Valid date: False`,
    realWorldExample: `Django uses class methods for querysets (objects.create()) and static methods for utility functions.`
  }
];

// File Handling & Exceptions (Module 6)
export const PYTHON_FILE_SLIDES: Slide[] = [
  {
    id: 'python-file-read',
    title: '33. Reading Files',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Python makes file handling easy. Always use the **with** statement to ensure files are properly closed.

**File Modes:**
- "r" - Read (default)
- "w" - Write (overwrites!)
- "a" - Append
- "r+" - Read and write`,
    bullets: [
      "with statement auto-closes the file",
      ".read() reads entire file as string",
      ".readline() reads one line",
      ".readlines() returns list of all lines"
    ],
    defaultCode: `# Create a sample file first
with open("sample.txt", "w") as f:
    f.write("Hello, Python!\\n")
    f.write("This is line 2\\n")
    f.write("This is line 3\\n")

print("File created!")

# Read entire file
with open("sample.txt", "r") as file:
    content = file.read()
    print("Full content:")
    print(content)

# Read line by line
print("Reading line by line:")
with open("sample.txt", "r") as file:
    for line in file:
        print(f"  > {line.strip()}")

# Read all lines as list
with open("sample.txt", "r") as file:
    lines = file.readlines()
    print(f"Total lines: {len(lines)}")`,
    expectedOutput: `File created!
Full content:
Hello, Python!
This is line 2
This is line 3

Reading line by line:
  > Hello, Python!
  > This is line 2
  > This is line 3
Total lines: 3`,
    realWorldExample: `Django reads configuration files, templates, and static files. Understanding file I/O is essential.`
  },
  {
    id: 'python-file-write',
    title: '34. Writing Files',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `Writing to files is straightforward. Be careful with "w" mode - it overwrites existing content!

**Methods:**
- .write() - Write a string
- .writelines() - Write a list of strings`,
    bullets: [
      "w mode creates file if it doesnt exist",
      "a mode appends to existing content",
      "Always include newlines in your strings",
      "Use f-strings for dynamic content"
    ],
    defaultCode: `# Write mode - creates or overwrites
with open("output.txt", "w") as file:
    file.write("Line 1: Hello!\\n")
    file.write("Line 2: World!\\n")

print("File written!")

# Append mode - adds to existing
with open("output.txt", "a") as file:
    file.write("Line 3: Appended!\\n")

print("Line appended!")

# Write multiple lines at once
lines = ["Apple\\n", "Banana\\n", "Cherry\\n"]
with open("fruits.txt", "w") as file:
    file.writelines(lines)

print("Fruits written!")

# Verify by reading
with open("output.txt", "r") as file:
    print("\\nOutput file content:")
    print(file.read())`,
    expectedOutput: `File written!
Line appended!
Fruits written!

Output file content:
Line 1: Hello!
Line 2: World!
Line 3: Appended!`
  },
  {
    id: 'python-exceptions',
    title: '35. Exception Handling',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Exceptions** are errors that occur during program execution. Handle them gracefully with try/except blocks.

**Structure:**
- try: Code that might fail
- except: Handle the error
- else: Runs if no error
- finally: Always runs`,
    bullets: [
      "Catch specific exceptions when possible",
      "Use Exception for general errors",
      "finally is great for cleanup",
      "Raise exceptions with raise keyword"
    ],
    defaultCode: `# Basic try/except
def divide(a, b):
    try:
        result = a / b
        print(f"{a} / {b} = {result}")
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None

divide(10, 2)
divide(10, 0)

# Multiple exceptions
def convert_to_int(value):
    try:
        return int(value)
    except ValueError:
        print(f"'{value}' is not a valid number")
        return None
    except TypeError:
        print("Cannot convert this type")
        return None

print("\\nConversions:")
print(convert_to_int("42"))
print(convert_to_int("hello"))

# try/except/else/finally
print("\\nWith else and finally:")
try:
    file = open("sample.txt", "r")
except FileNotFoundError:
    print("File not found!")
else:
    print("File opened successfully!")
    file.close()
finally:
    print("Cleanup complete.")`,
    expectedOutput: `10 / 2 = 5.0
Error: Cannot divide by zero!

Conversions:
42
'hello' is not a valid number
None

With else and finally:
File opened successfully!
Cleanup complete.`
  },
  {
    id: 'python-custom-exceptions',
    title: '36. Custom Exceptions',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `You can create your own exception types by inheriting from Exception. This makes your error handling more descriptive.

Custom exceptions are useful for domain-specific errors in your application.`,
    bullets: [
      "Inherit from Exception class",
      "Add custom attributes if needed",
      "Use raise to throw your exception",
      "Django has many custom exceptions"
    ],
    defaultCode: `# Custom exception
class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

class AgeError(ValidationError):
    pass

# Using custom exception
def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError("age", "Must be an integer")
    if age < 0:
        raise AgeError("age", "Cannot be negative")
    if age > 150:
        raise AgeError("age", "Exceeds maximum age")
    return True

# Test validation
test_ages = [25, -5, 200, "twenty"]

for age in test_ages:
    try:
        validate_age(age)
        print(f"Age {age} is valid")
    except AgeError as e:
        print(f"Age error: {e}")
    except ValidationError as e:
        print(f"Validation error: {e}")`,
    expectedOutput: `Age 25 is valid
Age error: age: Cannot be negative
Age error: age: Exceeds maximum age
Validation error: age: Must be an integer`,
    realWorldExample: `Django has ValidationError, PermissionDenied, ObjectDoesNotExist, and many more custom exceptions.`
  },
  {
    id: 'python-json',
    title: '37. Working with JSON',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**JSON (JavaScript Object Notation)** is the standard format for data exchange. Python's json module handles conversion between JSON strings and Python objects.

**Key Functions:**
- json.dumps() - Python to JSON string
- json.loads() - JSON string to Python
- json.dump() - Write to file
- json.load() - Read from file`,
    bullets: [
      "JSON maps directly to Python dicts/lists",
      "Use indent parameter for pretty printing",
      "Handle JSONDecodeError for invalid JSON",
      "APIs send and receive JSON data"
    ],
    defaultCode: `import json

# Python dict to JSON string
user = {
    "name": "Ali",
    "age": 25,
    "skills": ["Python", "Django", "SQL"],
    "active": True
}

json_string = json.dumps(user, indent=2)
print("JSON string:")
print(json_string)

# JSON string to Python dict
json_data = '{"name": "Sara", "age": 22}'
parsed = json.loads(json_data)
print(f"\\nParsed: {parsed['name']}, age {parsed['age']}")

# Write to file
with open("data.json", "w") as f:
    json.dump(user, f, indent=2)
print("\\nSaved to data.json")

# Read from file
with open("data.json", "r") as f:
    loaded = json.load(f)
print(f"Loaded: {loaded['name']}")`,
    expectedOutput: `JSON string:
{
  "name": "Ali",
  "age": 25,
  "skills": [
    "Python",
    "Django",
    "SQL"
  ],
  "active": true
}

Parsed: Sara, age 22

Saved to data.json
Loaded: Ali`,
    realWorldExample: `Django REST Framework uses JSON for API responses. Configuration files often use JSON format.`
  }
];

// Advanced Topics (Module 7 - Django Relevant)
export const PYTHON_ADVANCED_SLIDES: Slide[] = [
  {
    id: 'python-modules',
    title: '38. Modules & Imports',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Modules** are Python files that contain code you can reuse. Organize your code into modules for better maintainability.

**Import Styles:**
- import module
- from module import function
- from module import *
- import module as alias`,
    bullets: [
      "Each .py file is a module",
      "Use from for specific imports",
      "Avoid import * in production",
      "Django apps are modules"
    ],
    defaultCode: `# Import entire module
import math
print("Pi:", math.pi)
print("Sqrt(16):", math.sqrt(16))

# Import specific functions
from datetime import datetime, timedelta
now = datetime.now()
print(f"Now: {now.strftime('%Y-%m-%d %H:%M')}")

tomorrow = now + timedelta(days=1)
print(f"Tomorrow: {tomorrow.strftime('%Y-%m-%d')}")

# Import with alias
import json as js
data = js.dumps({"key": "value"})
print(f"JSON: {data}")

# Check available functions
print("\\nMath functions available:")
print([x for x in dir(math) if not x.startswith("_")][:5])`,
    expectedOutput: `Pi: 3.141592653589793
Sqrt(16): 4.0
Now: 2024-01-15 10:30
Tomorrow: 2024-01-16
JSON: {"key": "value"}

Math functions available:
['acos', 'acosh', 'asin', 'asinh', 'atan']`,
    realWorldExample: `Django: from django.shortcuts import render, redirect. Every Django project uses imports extensively.`
  },
  {
    id: 'python-virtual-env',
    title: '39. Virtual Environments',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**Virtual environments** isolate project dependencies. Each project gets its own Python packages, avoiding version conflicts.

**Commands:**
- python -m venv venv (create)
- venv/Scripts/activate (Windows)
- source venv/bin/activate (Mac/Linux)
- pip install package
- pip freeze > requirements.txt`,
    bullets: [
      "Always use venv for projects",
      "Django needs its own virtual environment",
      "requirements.txt lists all packages",
      "Dont commit venv folder to git"
    ],
    defaultCode: `# These are terminal commands, not Python code
# But here's how you'd work with packages in Python:

# Check installed packages
import subprocess
result = subprocess.run(
    ["pip", "list"], 
    capture_output=True, 
    text=True
)
print("Sample installed packages:")
for line in result.stdout.split("\\n")[:6]:
    print(line)

# Check Python version
import sys
print(f"\\nPython version: {sys.version}")
print(f"Python path: {sys.executable}")

# Check if in virtual environment
import os
venv = os.environ.get("VIRTUAL_ENV")
if venv:
    print(f"\\nVirtual env: {venv}")
else:
    print("\\nNot in a virtual environment")`,
    expectedOutput: `Sample installed packages:
Package    Version
---------- -------
pip        23.0
setuptools 65.5.0

Python version: 3.11.0
Python path: /usr/bin/python3

Not in a virtual environment`
  },
  {
    id: 'python-pip-packages',
    title: '40. Package Management',
    type: SlideType.CONCEPT,
    language: Language.PYTHON,
    content: `**pip** is Pythons package manager. It installs packages from PyPI (Python Package Index).

**Common Commands:**
- pip install package
- pip uninstall package
- pip list
- pip freeze > requirements.txt
- pip install -r requirements.txt`,
    bullets: [
      "PyPI has over 400,000 packages",
      "Django is installed via pip",
      "Always pin versions in requirements.txt",
      "Use pip install --upgrade to update"
    ],
    defaultCode: `# Working with packages programmatically
import pkg_resources

# List installed packages
installed = [d.project_name for d in pkg_resources.working_set]
print("Some installed packages:")
for pkg in sorted(installed)[:10]:
    print(f"  - {pkg}")

# Get package version
def get_version(package_name):
    try:
        version = pkg_resources.get_distribution(package_name).version
        return version
    except pkg_resources.DistributionNotFound:
        return "Not installed"

packages = ["pip", "setuptools"]
print("\\nPackage versions:")
for pkg in packages:
    print(f"  {pkg}: {get_version(pkg)}")

# Example requirements.txt content
requirements = """
Django==4.2
djangorestframework==3.14.0
Pillow>=9.0
python-dotenv
"""
print("\\nExample requirements.txt:")
print(requirements)`,
    expectedOutput: `Some installed packages:
  - certifi
  - charset-normalizer
  - idna
  - pip
  - requests
  - setuptools
  - urllib3
  - wheel

Package versions:
  pip: 23.0
  setuptools: 65.5.0

Example requirements.txt:

Django==4.2
djangorestframework==3.14.0
Pillow>=9.0
python-dotenv`
  },
  {
    id: 'python-context-managers',
    title: '41. Context Managers',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Context managers** handle setup and cleanup automatically. The with statement ensures resources are properly managed.

You can create custom context managers using:
- __enter__ and __exit__ methods
- @contextmanager decorator`,
    bullets: [
      "with statement calls __enter__ and __exit__",
      "Great for files, database connections, locks",
      "Ensures cleanup even if errors occur",
      "Django uses context managers for transactions"
    ],
    defaultCode: `# Built-in context manager (file)
with open("test.txt", "w") as f:
    f.write("Hello!")
# File is automatically closed

# Custom context manager class
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        print("Timer started...")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Timer ended: {elapsed:.4f} seconds")
        return False  # Don't suppress exceptions

# Using custom context manager
with Timer():
    total = sum(range(100000))
    print(f"Sum calculated: {total}")

# Using contextlib
from contextlib import contextmanager

@contextmanager
def database_connection():
    print("Opening database connection...")
    connection = {"connected": True}
    try:
        yield connection
    finally:
        print("Closing database connection...")

with database_connection() as db:
    print(f"Working with db: {db}")`,
    expectedOutput: `Timer started...
Sum calculated: 4999950000
Timer ended: 0.0050 seconds
Opening database connection...
Working with db: {'connected': True}
Closing database connection...`,
    realWorldExample: `Django uses context managers for database transactions: with transaction.atomic(): ...`
  },
  {
    id: 'python-type-hints',
    title: '42. Type Hints',
    type: SlideType.CODE,
    language: Language.PYTHON,
    content: `**Type hints** add optional type information to your code. They help with IDE autocomplete, documentation, and catching bugs early.

Python remains dynamically typed - hints are not enforced at runtime but are useful for tools like mypy.`,
    bullets: [
      "Type hints are optional but recommended",
      "Use typing module for complex types",
      "IDEs provide better autocomplete",
      "Django 4+ uses type hints extensively"
    ],
    defaultCode: `from typing import List, Dict, Optional, Union

# Basic type hints
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

# Function with type hints
result = greet("Ali")
print(result)
print(f"1 + 2 = {add(1, 2)}")

# List and Dict types
def process_users(users: List[Dict[str, str]]) -> List[str]:
    return [user["name"] for user in users]

users = [
    {"name": "Ali", "role": "admin"},
    {"name": "Sara", "role": "user"}
]
names = process_users(users)
print(f"Names: {names}")

# Optional and Union
def find_user(user_id: int) -> Optional[Dict]:
    users = {1: {"name": "Ali"}, 2: {"name": "Sara"}}
    return users.get(user_id)

print(f"User 1: {find_user(1)}")
print(f"User 99: {find_user(99)}")

# Class with type hints
class Product:
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price
    
    def display(self) -> str:
        return f"{self.name}: {self.price}"

product = Product("Laptop", 999.99)
print(product.display())`,
    expectedOutput: `Hello, Ali!
1 + 2 = 3
Names: ['Ali', 'Sara']
User 1: {'name': 'Ali'}
User 99: None
Laptop: 999.99`,
    realWorldExample: `Django 4+ models and views use type hints. Modern Python projects expect type annotations.`
  }
];

// Combined export for all Python slides
export const ALL_PYTHON_SLIDES: Slide[] = [
  ...PYTHON_BASIC_SLIDES,
  ...PYTHON_CONTROL_SLIDES,
  ...PYTHON_DATA_SLIDES,
  ...PYTHON_FUNCTION_SLIDES,
  ...PYTHON_OOP_SLIDES,
  ...PYTHON_FILE_SLIDES,
  ...PYTHON_ADVANCED_SLIDES
];

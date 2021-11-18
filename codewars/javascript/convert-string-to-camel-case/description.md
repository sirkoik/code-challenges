# Challenge: Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

## Examples

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`

- [Challenge](https://www.codewars.com/kata/517abf86da9663f1d2000003)

# Notes and Solutions

Original solution replaced the \_- with spaces and then worked on them. This required an extra step of calling `.split()` and then `.reduce()` on the string.

My revised solution splitted the string with a regex and then worked on each substring.

My current solution alters each element directly in the `.replace()` function callback.

- [My current solution](solution.js)
- [My revised solution](solution-revised1.js)
- [My original solution](solution-original.js)

# Difficulty rank

[6 kyu](https://docs.codewars.com/gamification/ranks)

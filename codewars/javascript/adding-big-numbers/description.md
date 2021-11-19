# Challenge: Adding Big Numbers

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

## Example

```
add("123", "321"); -> "444"
add("11", "99"); -> "110"
```

## Challenge Notes

- The input numbers are big.
- The input is a string of only digits
- The numbers are positives

* [Challenge](https://www.codewars.com/kata/525f4206b73515bffb000b21)

# Notes and Solutions

This solution basically does carry-over addition with loops. It pads shorter numbers so that they line up with longer ones, enabling the addition.

I refactored the original solution to be more inline with ES6 JavaScript expectations. Changed some variables to consts, and copied argument variables instead of altering them directly.

- [My current solution](solution.js)
- [My original solution](solution-original.js)

# Difficulty rank

[4 kyu](https://docs.codewars.com/gamification/ranks)

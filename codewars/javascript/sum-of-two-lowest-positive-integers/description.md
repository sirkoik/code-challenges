# Challenge: Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be `7`.

`[10, 343445353, 3453445, 3453545353453]` should return `3453455`.

- [Challenge](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

# Notes and Solutions

I solved this by sorting the array in ascending order and then summing the first two elements.

- [My current solution](solution.js)
- [Original solution](solution-original.js)

# Difficulty rank

[7 kyu](https://docs.codewars.com/gamification/ranks)

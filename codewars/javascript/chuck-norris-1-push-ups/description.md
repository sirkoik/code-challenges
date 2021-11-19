# Challenge: Convert string to camel case

- [Challenge](https://www.codewars.com/kata/517abf86da9663f1d2000003)

# Notes and Solutions

Both solutions involved getting rid of any characters (including numbers 2-9) between the binary numbers.

They also had to account for a subtle "gotcha" - Math.max will partially "decimalize" larger binary numbers.

To get around this, I converted the binary numbers to decimal first, then compared them.

My current solution condenses the logic into fewer lines and is more efficient (one map function, no pushing items onto an array).

- [My current solution](solution.js)
- [My original solution](solution-original.js)

# Difficulty rank

[6 kyu](https://docs.codewars.com/gamification/ranks)

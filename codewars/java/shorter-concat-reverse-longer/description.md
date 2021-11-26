# Challenge: shorter concat [reverse longer]

Given 2 strings, `a` and `b`, return a string of the form: `shorter+reverse(longer)+shorter`.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings `a` and `b` may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If `a` and `b` have the same length treat a as the longer producing `b+reverse(a)+b`

- [Challenge](https://www.codewars.com/kata/54557d61126a00423b000a45)

# Notes and Solutions

Rearrangement of characters using loops.

- [My current solution](solution.java)

# Difficulty rank

[7 kyu](https://docs.codewars.com/gamification/ranks)

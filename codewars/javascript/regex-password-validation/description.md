# Challenge:

You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
- Valid passwords will only be alphanumeric characters.

* [Challenge](https://www.codewars.com/kata/52e1476c8147a7547a000811)

# Notes and Solutions

This uses positive lookahead three times to make sure that the password has at least one number, one upper case character, and one lowercase character. These tests don't "count" as matches because they are lookahead. Then there is a phrase making sure that the password string is made up of at least a six-character-long alphanumeric string, and that it starts and ends with that string (important when there are leading or trailing non-alphanumeric characters).

- [My current solution](solution.js)

# Difficulty rank

[5 kyu](https://docs.codewars.com/gamification/ranks)

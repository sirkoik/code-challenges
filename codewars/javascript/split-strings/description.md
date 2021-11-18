# Challenge: Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

## Examples:

```
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
```

- [Challenge](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

# Notes and Solutions

I solved this first using loops, and then a regex that came very close to the "clever" solution. My final solution is the same as the clever one, though loops might be easier to understand here.

- [My current solution](solution.js)
- [Revised original solution](solution-revised-1.js)
- [Original solution](solution-original.js)

# Difficulty rank

[6 kyu](https://docs.codewars.com/gamification/ranks)

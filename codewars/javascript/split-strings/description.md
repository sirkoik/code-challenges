# Title

Split Strings

# Link

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

# Difficulty rank

6 kyu

# Description

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

## Examples:

```
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
```

# Notes

I solved this first using loops, and then a regex that came very close to the "clever" solution. My final solution is the same as the clever one, though loops might be easier to understand here.

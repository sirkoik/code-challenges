# Challenge: Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

## Example

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

- [Challenge](https://www.codewars.com/kata/5208f99aee097e6552000148)

# Notes and Solutions

First solution was a non-regex one with a for loop. The current solution uses a regex `replaceAll()` which adds a space before all capital letters.

- [My current solution](solution.java)
- [My original solution](solution-original.java)

# Difficulty rank

[6 kyu](https://docs.codewars.com/gamification/ranks)

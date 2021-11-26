# Challenge: Strip Comments

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

## Example:

Given an input string of:

```
apples, pears # and bananas
grapes
bananas !apples
```

The output expected would be:

```
apples, pears
grapes
bananas
```

The code would be called like so:

```
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
```

- [Challenge](https://www.codewars.com/kata/51c8e37cee245da6b40000bd/)

# Notes and Solutions

My current solution uses `RegExp` to create a custom multiline string pattern match and then concatenates the matches. The original solution uses loops.

- [My current solution](solution.js)
- [My original solution](solution.js)

# Difficulty rank

[4 kyu](https://docs.codewars.com/gamification/ranks)

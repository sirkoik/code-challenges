# Challenge: RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

```
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

- [Challenge](https://www.codewars.com/kata/513e08acc600c94f01000001/)

# Notes and Solutions

Involves converting each triplet into hexadecimal and then padding it.

- [My current solution](solution.js)
- [My original solution](solution-original.js)

# Difficulty rank

[5 kyu](https://docs.codewars.com/gamification/ranks)

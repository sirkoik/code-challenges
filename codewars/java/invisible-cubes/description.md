# Challenge: Invisible cubes

Imagine there's a big cube consisting of n<sup>3</sup> small cubes. Calculate, how many small cubes are not visible from outside.

For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)

For a visual representation: --> https://imgur.com/a/AN8A5DJ

- [Challenge](https://www.codewars.com/kata/560d6ebe7a8c737c52000084)

# Notes and Solutions

Any cube of length 1 will have 0 interior cubes, so return `0L`. To get the interior cubes of `n > 1`, I subtract 2 from the outer length (which removes the length of the outer cubes on each side) and cube that value.

- [My current solution](solution.java)

# Difficulty rank

[7 kyu](https://docs.codewars.com/gamification/ranks)

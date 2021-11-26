# Challenge: Count IP Addresses

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

## Examples

```
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
```

- [Challenge](https://www.codewars.com/kata/526989a41034285187000de4)

# Notes and Solutions

My solution extracts the octets from the string inputs, subtracts the octets from one another and then multiplies the difference by the appropriate power of two. Then it adds all the differences together to get the total number of addresses between both IPs.

- [My current solution](solution.java)

# Difficulty rank

[5 kyu](https://docs.codewars.com/gamification/ranks)

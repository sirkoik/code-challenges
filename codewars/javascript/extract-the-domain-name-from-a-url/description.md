# Challenge: Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```
domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```

- [Challenge](https://www.codewars.com/kata/514a024011ea4fb54200004b)

# Notes and Solutions

I ended up writing a regex that replaces all instances of `"http://"`, `"https://"` and `"www."` with `""`, splits the remainder into an array, and returns the element at the first index.

- [My current solution](solution.js)
- [My revised solution](solution-revised1.js)
- [My original solution](solution-original.js)

# Difficulty rank

[5 kyu](https://docs.codewars.com/gamification/ranks)

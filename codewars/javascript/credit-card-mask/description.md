# Title

Credit Card Mask

# Link

https://www.codewars.com/kata/5412509bd436bd33920011bc

# Difficulty rank

7 kyu

# Description

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

## Examples

```
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

# Notes

I did not use a regex in my solution, unlike many others. A regex could be more flexible if you apply more conditions to it.

I originally solved this a long time ago. Refactored into a simpler solution by using `.repeat()`

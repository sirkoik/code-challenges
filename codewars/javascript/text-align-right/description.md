# Challenge: Text align right

Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

- Use spaces to fill in the gaps on the left side of the words.
- Each line should contain as many words as possible.
- Use '\n' to separate lines.
- Gap between words can't differ by more than one space.
- Lines should end with a word not a space.
- '\n' is not included in the length of a line.
- Last line should not contain '\n'
  Example with width=30:

```
        Bacon ipsum dolor amet
excepteur ut kevin burgdoggen,
   shankle cupim dolor officia
       ground round id ullamco
   deserunt nisi. Commodo tail
    qui salami, brisket boudin
tri-tip. Labore flank laboris,
  cow enim proident aliqua sed
      hamburger consequat. Sed
     consequat ut non bresaola
   capicola shoulder excepteur
 veniam, bacon kevin. Pastrami
   shank laborum est excepteur
 non eiusmod bresaola flank in
nostrud. Corned beef ex pig do
   kevin filet mignon in irure
 deserunt ipsum qui duis short
        loin. Beef ribs dolore
  meatball officia rump fugiat
  in enim corned beef non est.
```

If you enjoyed this one and want more of a challenge try https://www.codewars.com/kata/text-align-justify/python

If you like bacon ipsum https://baconipsum.com

- [Challenge](https://www.codewars.com/kata/583601518d3b9b8d3b0000c9)

# Notes and Solutions

My current solution splits the words into an array, and adds them together into lines, making sure that the character count of each line is less than or equal to `width`. The current solution uses the built-in `.repeat()` method to add whitespace instead of a custom `pad()` function.

- [My current solution](solution.js)
- [My original solution](solution-original.js)

# Difficulty rank

[6 kyu](https://docs.codewars.com/gamification/ranks)

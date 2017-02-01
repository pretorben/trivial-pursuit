# trivial-pursuit
Project 1: Trivial Pursuit Game

Development Approach: I started by hand-drawing how I wanted my game to look; the first version was, of course, the Gold version with fancy graphics, score card, timer, and randomized questions. I then sketched out the Bronze version which turned out to be bare bones basic in the looks department. I developed the HTML and CSS and then focused on the JS.

I did a pseudocode outline (bronze-pseudo.txt) which helped me think through the logic, develop concise and understandable classes and ids and to break up the project into smaller, manageable tasks.

Technologies Used: I used old-fashioned HTML tables to give my game structure with the intent of using Flexbox after the JS was developed. I used CSS to add color and to format the text and fonts. I used JS and jQuery to create the logic behind the game.

Unsolved Problems: 1) I need to condense the VAR assignments down at the beginning of the JS file; I know there has to be a better way (use arrays???) to assign values to the elements.

2) The game only featured 6 questions. I wanted to make each color category throw out random questions randomized answers (so the correct answer wasn't the same button all the time). - I figured out how to generate random questions (see /old/practice.js and /old/practice.html) but not how to integrate the code yet. - I need to figure out how to randomize the order of the answers

3) Need to figure out how to eliminate the HTML table and use Flexbox for the game design

4) Create scorecard (4x2 grid) whose squares fill with the corresponding color when a Q in that color category is answered correctly.

5) When Q is answered correctly the Q "freezes" until the game is RESET

6) Timer: 15 or 30 sec timer that counts-down when page loads; when timer hits 0 the unattempted and incorrect Qs will shuffle; frozen (correctly answered Qs) will not change; Timer will reset to 30 and start counts-down again.

7) When all Qs are answered correctly and the scorecard is filled the game ends with a "YOU WIN! Do you want to play again?" pop-up

User Stories:

As a user: - I should be able to reset the game when I want. - I should be able to keep track of the questions I answered correctly. - I should get positive feedback if I answer a question correctly or incorrectly. - I should be able to tell which questions I have already answered whether correctly or incorrectly. - I should be able to tell how much time I have left until the unanswered/incorrect questions shuffle again.

# trivial-pursuit
Project 1: Trivial Pursuit Game

<ul>Development Approach:</ul>
  <li>I started by hand-drawing how I wanted my game to look;  the first version was, of course, the Gold version with fancy graphics, score card, timer, and randomized questions.  I then sketched out the Bronze version which turned out to be bare bones basic in the looks department.  I developed the HTML and CSS and then focused on the JS.</li>

  <li>I did a pseudocode outline (bronze-pseudo.txt) which helped me think through the logic, develop concise and understandable classes and ids and to break up the project into smaller, manageable tasks.</li>

<ul>Technologies Used:</ul>
  <li>I used old-fashioned HTML tables to give my game structure with the intent of using Flexbox after the JS was developed.</li>
  <li>I used CSS to add color and to format the text and fonts.</li>
  <li>I used JS and jQuery to create the logic behind the game.</li>

<ul>Unsolved Problems:</ul>
  <li>I need to condense the VAR assignments down at the beginning of the JS file; I know there has to be a better way (use arrays???) to assign values to the elements.</li>

  <li>The game only featured 6 questions.  I wanted to make each color category throw out random questions randomized answers (so the correct answer wasn't the same button all the time).</li>
    <li>I figured out how to generate random questions (see /old/practice.js and /old/practice.html) but not how to integrate the code yet.</li>
    <li>I need to figure out how to randomize the order of the answers</li>

  <li>Need to figure out how to eliminate the HTML table and use Flexbox for the game design</li>

  <li>Create scorecard (4x2 grid) whose squares fill with the corresponding color when a Q in that color category is answered correctly.</li>

  <li>When Q is answered correctly the Q "freezes" until the game is RESET</li>

  <li>Timer: 15 or 30 sec timer that counts-down when page loads; when timer hits 0 the unattempted and incorrect Qs will shuffle; frozen (correctly answered Qs) will not change; Timer will reset to 30  and start counts-down again.</li>

  <li>When all Qs are answered correctly and the scorecard is filled the game ends with a "YOU WIN!  Do you want to play again?" pop-up</li>

<p>User Stories:</p>

<ul>As a user:</ul>
   <li>I should be able to reset the game when I want.</li>
   <li>I should be able to keep track of the questions I answered correctly.</li>
   <li>I should get positive feedback if I answer a question correctly or incorrectly.</li>
   <li>I should be able to tell which questions I have already answered whether correctly or incorrectly.</li>
   <li>I should be able to tell how much time I have left until the unanswered/incorrect questions shuffle again.</li>

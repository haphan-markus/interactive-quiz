# Interactive Quiz

## Description

This interactive quiz allows users to become familiar with coding assessment through a series of multiple-choice questions in a timed coding quiz. The app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code. Hopefully, the user will find this interactive quiz fun and useful.

## User story

```
AS A user
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Features

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  
  * When answer is clicked, the next question appears. The user will also be informed if their answer is correct or
  
  * If the answer clicked is incorrect, 10 seconds are subtracted time from the clock.

* The quiz will end when all questions are answered or the timer reaches 0.

  * When the game ends, the user's score will be displayed and the user can save their initials and their score.

## Usage

The deployed website link: 

## Visual

Browser user interface:
![Alt text](image1.png)

An example of the final interface when all questions are answered:
![Alt text](image2.png) 

Upon clicking the "Submit" button, the score and initial are stored into the local storage and displayed in the HighScores html:
![Alt text](image3.png)
![Alt text](image4.png)

The user can continue to retake the quiz, and the new score and intial can be stored and added up into the HighScores html:
![Alt text](image5.png)
![Alt text](image6.png)

The quiz is stopped when the user answers all questions, or if the timer reaches zero:
![Alt text](image7.png)
Everytime the user moves to a new question, the question number will be logged into the console log. In this case, the console log is empty, indicating that there is no question answered.

## License

[MIT](https://choosealicense.com/licenses/mit/)
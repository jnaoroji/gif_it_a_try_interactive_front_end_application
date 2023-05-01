# 07 Project 1: Interactive Front-End Application

At the conclusion of each phase of this course, you’ll work with a group of your fellow students to create a **project**. A project is collaborative work among a group of developers to create an application that solves a real-world problem. Projects model the experience you’ll encounter in every development role at any company, from large multinational businesses to small startups. Coding is collaborative.

A project is a bit different from the Challenge assignments you’ve worked on so far. One of the biggest differences is that you’ll no longer build an application by yourself! This has some advantages&mdash;you won’t have to do all of the work, you can divide up duties, and you can share skills and knowledge with other developers and lean on their strengths. This can also be challenging if you’re used to working alone. Constant communication and time management are just two of the skills you’ll need to practice to make sure everyone in your group works together to complete the project. 

Projects won’t provide you with a user story or acceptance criteria, because you and your group will create them once you decide which real-world problem your application will solve. This lack of constraints can be freeing in a way, because you have room to build what you want, but it also means that you have to decide what those constraints are before you can start working.

Finally, a project requires a presentation, because you’re trying to convince an audience that it serves a purpose. Your instructional staff and fellow students are investors, and you’re pitching your creation to them&mdash;an experience that developers are required to do frequently. Your presentation is just as important as the actual project, so take it just as seriously.

## Project Requirements

You and your group will use everything you’ve learned over the past six modules to create a real-world front-end application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

* Use a CSS framework other than Bootstrap.

* Be deployed to GitHub Pages.

* Be interactive (i.e., accept and respond to user input).

* Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).

* Does not use alerts, confirms, or prompts (use modals).

* Use client-side storage to store persistent data.

* Be responsive.

* Have a polished UI.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository

## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

  * Application uses at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources)

  * Application uses client-side storage to store persistent data.

  * Application doesn't use JS alerts, prompts, or confirms (uses modals instead).

  * Application uses a CSS framework other than Bootstrap.

  * Application is interactive (accepts and responds to user input)

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using a slide deck.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.

## How to Submit Your Interactive Front-End Project

**Each member of your group** is required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
# 07 Project 1: Gif it a Try! Song Guessing Game - Interactive Front-End Application

## Description

User story: As a user, I want to play a game that displays the titles of my favourite artist's works and asks me to identify the song based on a related Giphy video. I want to be scored on how many answers I got right, and be able to view my score after the game.
Acceptance Criteria:
The user can select an artist by clicking on their respective button on the webpage.
The webpage sends an API request to the MusicBrainz database to fetch the artist's works.
If the API request is successful and there are works to display, the webpage displays the titles of the artist's works.
The webpage randomly selects a work to generate a Giphy video that is displayed on the webpage.
The user can input their answer to the corresponding work's title in a text input field.
The webpage compares the user's answer to the correct answer, and if they match, the webpage displays a "correct" message.
The webpage tracks the number of correct answers the user submits.
After the user completes 5 rounds, the webpage displays the user's score in a modal popup, which shows the number of correct answers out of 5.
The webpage stores user score as persistent data in a highscores page.


## Usage

You can use this app by clicking on the deployed application:  https://jnaoroji.github.io/Schedule/



## Screenshot

The following screenshot shows my web application's appearance and functionality:
![this is the screenshot of my application, colour coded hours with schedule for the work day](./assets/screenshot.png)

## Credits

* https://developer.mozilla.org
* https://day.js.org/en/ 
* This gif was used as the predominant guideline for this Schedule App.
![A user clicks on slots on the color-coded calendar and edits the events.](./assets/05-third-party-apis-homework-demo.gif)

## License

Please refer to the LICENSE in the repo.


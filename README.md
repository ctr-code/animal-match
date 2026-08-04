# Animal Match

A game of matching animal descriptions to pictures.

---

## Table of Contents
* [Project Setup](#project-setup)
* [Design Brief](#design-brief)
* [Design & Planning](#design--planning)
  * [User Stories](#user-stories)
  * [Wireframe](#wireframe)
  * [Typography](#typography)
  * [Colour Scheme](#colour-scheme)
* [Features](#features)
* [Copilot AI Assistance](#copilot-ai-assistance)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Credit and Thanks](#credit-and-thanks)

---

## Project Setup

1. In github accept your invitation to collaborate.  There should be a banner inviting you to.

2. Open the terminal (e.g. in vscode).  If you are in a project folder enter `cd ..` to move up to the folder containing all your projects.

3. Enter `git clone https://github.com/ctr-code/animal-match/` to get a local copy of the project.

4. In vscode select `File | Close Folder` then `File | Open Folder` and choose the animal-match folder.

5. Go back to the terminal.  You should be in the animal-match folder.

6. Create a new branch for your work and switch to it using `git switch -c your-name-here`.  Don't forget to use your name!

7. After you have made some changes and committed them use `git push -u origin your-name-here` to push them to your branch on github.  After you've done this once you can simply use `git push` for future updates.

8. After pushing a change, go to github to create a pull request.  If you see a pull request banner (red arrow) click on the "Compare & pull request" button.  Otherwise, select your branch in the drop down (purple arrow), and click on the "commits ahead" text (green arrow).  You should see something like the second screenshot.  Click on the "Create pull request" button.

Steps 1 & 2 | Step 3
:--: | :--:
![steps 1&2 of creating pull request](docs/pull-1-2.png) | ![step 3 of creating pull request](docs/pull-3.png)

9. Use `git pull origin main` to retrieve other people's changes and merge them into your code.

---

## Design Brief

### External User’s Goal
The user wants an intuitive, educational, and engaging game to test their knowledge of animals by matching descriptions to pictures.

### Site Owner’s Goal
The site owner’s goal is to build an interactive single-page game that allows users to select themed animal sets, guess animals based on brief descriptions, and track their score across mobile and desktop devices.

---

## Design & Planning

### User Stories

- As a player, I want to choose from several animal sets such as Ocean, Sea and Air animals, so that I can play with different themes.
- As a player, I want to see a list of available animal sets before starting, so that I can select one that interests me.
- As a player, I want to view a description of an animal and a set of pictures of possible answers, so that I can identify the correct animal.
- As a player, I want to select one animal from the picture choices, so that I can make my guess.
- As a player, I want to move to the next description after I answer, so that the game continues smoothly.
- As a player, I want to receive immediate feedback on whether my choice was correct or incorrect, so that I can learn as I play.
- As a player, I want to see my score increase or decrease during the game, so that I can track my progress.
- As a player, I want to complete a full round of questions in a set, so that I feel a sense of accomplishment.
- As a player, I want to restart a set or the whole game, so that I can play again without hassle.
- As a player, I want the game to be easy to understand and navigate, so that I can start playing quickly.
- As a player, I want clear and visually appealing animal images, so that the game is enjoyable and easy to read.
- As a parent or teacher, I want themed animal sets, so that the game can be used for learning as well as fun.
- As a player, I want the game to work well on a desktop and mobile screen, so that I can play in different environments.
- As a player, I want to see a simple start screen and game over or completion screen, so that I know when the experience begins and ends.

### Wireframe

The initial UI wireframe is shown below and is the primary design reference during development.

![Animal Match Wireframe](docs/wireframe.png)

### Typography
* **Headers & Body Text:** [Font selections to be updated]

### Colour Scheme

Below are the colour palettes provided by Kieron for the Animal Match project:

![Animal Match Colour Palette 1](docs/palette-1.png)
![Animal Match Colour Palette 2](docs/palette-2.png)

---

## Features

### Planned Features
* **Theme Selection:** Select from themed animal categories (e.g., Air, Sea, Land).
* **Interactive Guessing Game:** Read animal descriptions and click matching images.
* **Instant Feedback & Score Keeping:** View real-time score updates and immediate correct/incorrect feedback.
* **Completion Screen:** Option to replay or restart sets upon completion.

---

## Copilot AI Assistance
* [Record details of GitHub Copilot prompts, suggestions, and fixes here]

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **GitHub** for repository management and hosting

---

## Testing

### Manual Testing
| User Story | Test | Result |
| :--- | :--- | :---: |
| 1 | Check that animal sets are listed and selectable | Pending |
| 2 | Check that description matches image choices | Pending |
| 3 | Check that instant feedback and score update works | Pending |

---

## Bugs
* [Document any bugs encountered and their fixes here]

---

## Deployment

### Forking & Cloning
1. Navigate to the GitHub repository.
2. Click **Fork** to create a copy under your account.
3. Clone locally using `git clone <your-fork-url>`.

### GitHub Pages Deployment
1. Go to repository **Settings**.
2. Select **Pages** from the left navigation.
3. Set the deployment branch to `main` (or `master`) and click **Save**.

---

## Credit and Thanks

* **Code Institute** and its tutors for teaching, support, and project guidance.
* **West Midlands Combined Authority** for funding the course.
* **Tim Berners-Lee et al.** for creating the web.
* **GitHub** for repository hosting and GitHub Pages.
# Animal Match

A game of matching animal descriptions to pictures.

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

- As a player, I want to choose from several animal sets such as Land, Sea and Air animals, so that I can play with different themes.
  - Acceptance Criteria:
    - Display a card for each of Land, Sea and Air animals.
    - When a card is selected switch to the game page with the URL fragment specifying the selection, e.g. `./game.html#air`.
- As a player, I want to choose a difficulty level so I can continue to challenge myself.
  - Acceptance Criteria:
    - The game provides at least one selectable difficulty option.
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

### Image Optimization Script (GIMP & Copilot)
* **Usage:** Copilot was used to write a GIMP script to convert `.png` images to `.webp`.
* **Challenges:** 
  * The first version failed due to a hallucinated function.
  * The second version produced images of very low quality.
  * The third version failed to set quality correctly because it called a function with the wrong number of parameters.
  * Copilot failed over many attempts to point to the correct function documentation.
* **Outcome:** The documentation was located manually to fix the script. This highlighted that AI tools can struggle with obscure technologies and APIs.

### Bug Fixing & Code Implementation
* **JS Validator & Console Error Fix:** AI was used to solve a console error appearing in the JavaScript validator regarding placeholder images in game cards. An initial suggestion to replace the source with an SVG failed, but a second suggestion to use `favicon.ico` succeeded as it was already loaded by the browser.
* **CSS-Only Modals:** AI was used to explain and implement modal functionality without requiring extra JavaScript.
* **Code Snippets:** AI assistance was used to check code, write standard snippets, and provide favicon file/link references.

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap:** Used for containers and layout structure throughout the project to keep the file structure organized and easily targeted for styling/scripting.
* **VSCode:** The primary IDE used to write and develop code for the project.
* **GitHub:** Used for repository hosting, project management, branch workflow, and deployment.
* **Am I Responsive? (Fireship):** Used for creating screenshots of the app's responsiveness across desktop and mobile devices.
* **W3C Markup Validation Service:** Used to test and validate HTML code.
* **Google DevTools:** Used for debugging functionality, checking console errors, and running Lighthouse audits.

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

* **[Code Institute](https://codeinstitute.net/)** and its tutors for teaching, support, and project guidance.
* **[West Midlands Combined Authority](https://www.wmca.org.uk/)** for funding the course.
* **[Tim Berners-Lee](https://w3.org/) et al.** for creating the web.
* **[GitHub](https://github.com/)** for repository hosting and GitHub Pages.
* **[Bootstrap](https://getbootstrap.com/)** for layout styling and component styling.
* **[Coolors](https://coolors.co/)** for color palette generation.
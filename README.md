# Animal Match

You can find our deployed site **[here](https://ctr-code.github.io/animal-match/index.html)**.


## Introduction

**Animal Match** is a fun, engaging one‑page game designed primarily for children aged 6–10, while still offering enough variety and challenge to be enjoyable for older players and adults. Our aim was to create a playful, visually appealing experience that feels smooth to use, easy to understand, and rewarding to complete.

The game centres around a simple but captivating goal: match an animal fact or description to the correct animal card. Each round contains **8 questions**, and players can choose from **three difficulty levels** — *Easy*, *Medium*, and *Hard* — as well as **three themed categories**: *Sea*, *Land*, and *Air*. This structure gives the game replayability and allows players to explore different types of animals and facts at their own pace.

Building Animal Match gave us the opportunity to flex and develop our skills across **HTML**, **CSS**, and **JavaScript**, from responsive layout design and custom styling to dynamic content handling and interactive game logic. The project challenged us to think creatively about user experience, accessibility, and performance while crafting a game that feels lively, colourful, and enjoyable for all ages.


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
- **Headers:** "Henny Penny", cursive  
  - Used for playful, characterful headings. Its whimsical curves match the game's light‑hearted, storybook feel and help key titles stand out.

- **Body Text:** "Caveat", "Segoe UI", sans-serif  
  - "Caveat" provides a friendly, handwritten tone that keeps the interface warm and approachable. "Segoe UI" acts as a clean, modern fallback to ensure readability across all devices.


### Colour Scheme

Below are the colour palettes provided by Kieron for the Animal Match project:

![Animal Match Colour Palette 1](docs/palette-1.png)
![Animal Match Colour Palette 2](docs/palette-2.png)

---

## Features

### Features Overview

| Feature | Description | Screenshot |
|--------|-------------|------------|
| Theme Selection | Players choose between Land, Sea, and Air animal sets. Selecting a theme loads the game with the correct URL fragment (e.g., `game.html#air`). | ![Theme Selection Screenshot](docs\theme-selection-ss.png) |
| Difficulty Selection | Players choose Easy, Medium, or Hard difficulty to adjust challenge and replayability. | ![Difficulty Selection Screenshot](docs\difficulty-selection-ss.png)|
| Animal Description Clues | Each question displays a short fact or description that hints at the correct animal. | ![Animal Description Clue Screenshot](docs\animal-description-ss.png) |
| Answer Card Grid | A set of animal image cards is shown for each question. Players select one to make their guess. | ![Answer Card Grid Screenshot](docs\animal-card-grid-ss.png)|
| Instant Feedback | The game immediately displays whether the chosen answer was correct or incorrect. | ![Instant Feedback Screenshot Correct](docs\instant-feedback-correct-ss.png) ![Instant Feedback Screenshot Incorrect](docs\instant-feedback-incorrect-ss.png) |
| Score Tracking | A live score counter updates throughout the round, showing correct answers and total points. | ![Score Tracking Screenshot](docs\score-tracking-ss.png) |
| Progress Bar | A visual progress bar shows how far through the 8‑question round the player is. |![Progress Bar Screenshot](docs\score-tracking-ss.png) |
| Round Completion Screen | After 8 questions, players see their final score, correct count, and options to replay or choose another theme. | ![Round Completion Screen Screenshot](docs\round-complete-ss.png) |
| Replay & Restart Options | Players can restart the current set or return to the main menu to choose a new theme. | ![Replay & Restart Options Screenshot]()|
| Simple & Intuitive Navigation | Clear buttons, layout, and instructions ensure the game is easy to understand and quick to start. | ![Navigation Screenshot](docs\round-complete-ss.png) |
| High‑Quality Animal Images | Bright, clear, visually appealing animal images make the game enjoyable and easy to read. | ![Animal Images Screenshot](docs\animal-card-grid-ss.png) |
| Educational Themed Sets | Themed sets (Land, Sea, Air) support learning for children, parents, and teachers. | ![Educational Themed Sets Screenshot](docs\theme-selection-ss.png) |
| Responsive Design | Fully responsive layout using Bootstrap and custom media queries ensures smooth play on desktop and mobile. | ![Responsive Design Screenshot](docs\responsive-ss.png)|
| Start & Completion Screens | A simple start screen introduces the game, and a completion screen wraps up each round clearly. | ![Start Screen Screenshot](docs\welcome-ss.png) ![Completion Screen Screenshot](docs\round-complete-ss.png) |


### Planned Features
* **Theme Selection:** Select from themed animal categories (e.g., Air, Sea, Land).
* **Interactive Guessing Game:** Read animal descriptions and click matching images.
* **Instant Feedback & Score Keeping:** View real-time score updates and immediate correct/incorrect feedback.
* **Completion Screen:** Option to replay or restart sets upon completion.

---

## Copilot & Gemini AI Assistance

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
* **Gemini AI Reflections:** Gemini AI was used to assist with documentation editing, structuring manual test suites directly from the HTML code, and organizing file structure guidelines for GitHub PRs.

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

## Testing & Validation

### Code Validation

#### HTML Validation
The HTML was validated using the [W3C Markup Validation Service](https://validator.w3.org/).
- **Result:** Pass — 0 errors, 0 warnings.
![HTML Validator Result](docs/html-validator.png)

#### CSS Validation
The CSS stylesheet was validated using the [W3C CSS Validation Service (Jigsaw)](https://jigsaw.w3.org/css-validator/).
- **Result:** Pass — 0 errors found.
![CSS Validator Result](docs/css-validator.png)

#### JavaScript Validation
The JavaScript files (`assets/js/data.js` and `assets/js/script.js`) were linted using [JSHint](https://jshint.com/).
- **Result:** Pass — 0 warnings, no syntax errors.
![JS Validator Result](docs/js-validator.png)

---

### Performance & Responsiveness

Lighthouse audits were conducted in Chrome DevTools to measure Performance, Accessibility, Best Practices, and SEO across both Mobile and Desktop viewports.

| Viewport | Performance | Accessibility | Best Practices | SEO | Screenshot |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Mobile** | High | 100% | High | High | ![Lighthouse Mobile](docs/lighthouse-mobile.png) |
| **Desktop** | High | 100% | High | High | ![Lighthouse Desktop](docs/lighthouse-desktop.png) |

#### Responsive Mockup
The application was tested across multiple screen resolutions and viewports (mobile, tablet, and desktop) as well as major web browsers (Chrome, Firefox, Edge, Safari).

![Fireship Responsiveness](docs/fireship-responsive-mockup.png)

---

### Manual Testing

| Element / Feature | Test Action | Expected Result | Result |
| :--- | :--- | :--- | :---: |
| **Navbar Brand Link** | Click "Animal Match" link | Reloads or navigates to `index.html` | Pass |
| **How to Play Button** | Click "How to Play" button in header | Opens instructions dialog | Pass |
| **Close Instructions Button** | Click "Let's Play" button in modal | Closes the instructions dialog | Pass |
| **Difficulty Selection** | Click a difficulty button (Easy/Medium/Hard) | Sets game difficulty level | Pass |
| **Theme Selection** | Click a theme card (Land, Sea, or Air) | Selects animal category set | Pass |
| **Status Bar Display** | Check the theme, difficulty, question count and score display | Displays expected active values e.g. (`Land`, `Easy`, `1 / 8`, `0`) | Pass |
| **Progress Bar** | Check progress bar width styling | Renders initial percentage (`12.5%`) visually and updates | Pass |
| **Description Box** | Read clue | Displays animal description text accurately | Pass |
| **Answer Option Cards** | Click an answer button | Selects answer, and triggers feedback overlay | Pass |
| **Start Over Button** | Click "Start Over" button | Returns to difficulty selection screen | Pass |
| **Round Complete Panel** | Answer final question in set | Displays the "Round complete" screen | Pass |
| **Final Score & Correct Count** | Check summary values on completion screen | Displays final score and correct answer ratio | Pass |
| **Play Again Button** | Click "Play Again" button | Resets game state and restarts current set | Pass |
| **Choose Another Set Button**| Click "Choose Another Set" button | Returns to set selection section | Pass |
| **Win Condition & Audio** | Complete game with a score of 6 or more | Triggers applause sound and success overlay | Pass |
| **Game Over Condition & Audio**| Complete game with a score of 5 or less | Triggers disappointment sound and failure overlay | Pass |
| **Custom 404 Page** | Navigate to non-existent page | Renders custom `404.html` page with return link | Pass |

---

## Technical Features & Performance Optimizations

* **Image Optimization (WebP):** All raw PNG animal assets were converted to lightweight `.webp` format utilizing a custom GIMP batch processing script (`docs/gimp-png-to-webp.scm`), significantly reducing network payload and improving page load speeds.
* **Modular Codebase:** Separated animal dataset configurations (`assets/js/data.js`) from game control logic (`assets/js/script.js`) to adhere to clean code principles.
* **Custom Error Handling:** Implemented `404.html` to gracefully handle broken links or direct invalid requests.

---

## Bugs
* **JS Validator Console Error:** Resolved console errors regarding placeholder images by utilizing `favicon.ico` already available in the browser environment.
* **Fireship Screenshot Styling:** Changed Fireship tool background to white using browser DevTools to ensure responsive screens remain clearly visible in dark/light modes.
* **Footer Blocking Button Click/Cursor:** Fixed an issue where the footer overlay blocked cursor interaction and button clicks by applying `pointer-events: none` to the footer overlay element.

---

## Deployment

### Live Site
The live deployed site can be accessed here: [Animal Match Live Site](https://ctr-code.github.io/animal-match/)

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
* **Audio Assets:**
  * Applause effect: `roesisch-applause-01-253125.mp3` via Pixabay.
  * Disappointment effect: `universfield-crowd-disappointment-reaction-352718.mp3` via Pixabay.
* **Responsive Visuals:** Device mockup generated using Fireship / Am I Responsive tools.
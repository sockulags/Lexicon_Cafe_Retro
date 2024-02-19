# Exercise React Caffe Retro

### [Live Demo](https://sockulags.github.io/Lexicon_Cafe_Retro/)

### Description

You are contacted by the advertising agency SkissaMera, who has produced a sketch of a website for a client – ​​a cafe called Caffe Retro.

### Scetch

The sketch is in the form of a video, "Caffe Retro sketch", and it shows a website consisting of a web page divided into three sections _( Hot, Juice and Cozy )_. Watch carefully, pausing to see details as you work.

<video controls src="./src/assets/Caffe Retro skiss.mov" style="padding-top: 2rem" width="100%"></video>

You must imitate the sketch as much as you can. Do not use your own images and fonts, but use the attached material, follow the look in the video and the instructions in this exercise description. The built-in CSS color `darkred` is a good color for this exercise.

The different images, fonts, texts and video are available in the asssets folder.

### Intructions

**Before you start, you must run a `npm install` in this folder in order to install all the dependencies. Then you do a `npm run dev` in order to start the application. NO "Live Server" usage here as Vite will fire up a development server for you.**

- The website must be build with React and ViteJS. A Vite React application has been scaffolded to you.
- The website must have three section components.
- Every section component should fill an entire window.
- Every section component should have a header, texts and background images according to the scetch. Try to make components that can be reused across the section components.
- There must be a menu component with links to the different sections.
- Every background image should cover its entire section.
- The website should have as many semantic elements as possible.
- The menu should be fixed to the top of the window at all time.


## Solution

### Overview

The application consists of the following primary files and components:

- `index.js`: Entry point for the React application.
- `App.jsx`: The root component that encapsulates the entire application.
- `Navbar.jsx`: Component for displaying the navigation bar.
- `Section.jsx`: Component for rendering individual sections of the menu and information.
- `constants/text.js`: Contains data for the application, including images and text for each menu section.

### `App.jsx`

Acts as the main container for the application, importing and rendering the `Navbar` and `Section` components to form the complete webpage.

### `Navbar.jsx`

Defines a simple navigation bar with links to different sections of the site (`#hot`, `#juicy`, `#cosy`). This component facilitates easy navigation throughout the website.

### `Section.jsx`

Iterates over the `TEXT` constant to dynamically generate sections for each category (e.g., "hot", "juicy", "cosy"). Each section displays a title, informational text, a list of menu items with prices, and an image corresponding to the category.

#### Subcomponents within `Section.jsx`:

- `Info`: Displays informational text for each section.
- `MenuItems`: Lists the menu items and their prices for each section.

### `constants/text.js`

Exports the `TEXT` constant, which is an object containing data for each section of the menu. This data includes:
- The image to be displayed.
- Text information for the left and right sides.
- An array of menu items and their respective prices.

### Assets

The application imports images (`hot.jpg`, `juicy.jpg`, `cosy.jpg`) used in the `TEXT` constant to visually represent each section of the menu.

## Implementation Notes

- The application demonstrates the use of React's modular component structure, allowing for reusable components and separation of concerns.
- Data driving the content of the website is stored in `constants/text.js`, facilitating easy updates and management.
- React's `map` function is used to dynamically generate content based on the `TEXT` data, showcasing a common pattern for rendering lists of elements in React.


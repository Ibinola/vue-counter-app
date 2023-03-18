# Vue.js Counter Application

This is a simple Vue.js application that demonstrates how to use Vuex for state management and how to create a reusable counter composable. The application consists of a single page with a counter component that displays a count value, increment, decrement, reset, and setValue buttons. The counter component is managed by Vuex, which provides a central store for storing the counter state and methods for manipulating it.

## Getting Started

To get started with the application, you will need to clone the project repository to your local machine and install the required dependencies using npm or yarn.

```
# Clone the repository
git clone https://github.com/Ibinola/vue-counter-app.git

# Change into the project directory
cd vue-counter-app

# Install dependencies
npm install
```
Once you have installed the dependencies, you can run the development server using the following command:

```
npm run serve
```

This will start the application at http://localhost:8080/ and you can access the counter page at http://localhost:8080/counter.

### Project Structure 

The project follows a standard Vue.js project structure, with the source code located in the `src` directory and the entry point for the application in the `main.js` file. The `App.vue` file defines the main application component, which renders the router-view component for handling the application's routes. The `router.js` file defines the routes for the application, and the `pages` directory contains the components for each page.

The `store` directory contains the Vuex store, which defines the state and methods for managing the counter component. The `composables` directory contains the reusable counter composable, which provides the increment, decrement, reset, and setValue functions for the counter component.


### Technologies Used

The application was built using the following technologies:

- Vue.js - a progressive framework for building user interfaces
- Vuex - a state management pattern and library for Vue.js applications
- Vue Router - the official router for Vue.js
- JavaScript - a high-level programming language used to build web applications


### Contributing

If you would like to contribute to this project, please feel free to submit a pull request or open an issue. All contributions are welcome!


### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

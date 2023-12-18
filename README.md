# Boldly Earth

Welcome to Boldly Earth Dashboard, your all-in-one financial hub.Users can track portfolios and make data-driven decisions, while administrators maintain control and security. Signing up is quick and easy, so join us on this financial journey today! 🚀

## Features

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast, modern build tool that provides a blazing-fast development experience.
- **React Router**: For handling client-side routing in your admin panel.
- **Redux**: A state management library for managing global application state.
- **Ant Design**: A widely used UI framework for building beautiful and responsive user interfaces.
- **Authentication**: Basic authentication setup with dummy user data for easy customization.
- **Responsive Layout**: A responsive layout structure that adapts to different screen sizes.
- **Webpack Bundle Analyzer**: Easily analyze and optimize the project's bundle size.
- **Linting and Formatting**: Configured ESLint and Prettier for code consistency.

## Getting Started

Follow these steps to set up and run the project on your local machine:

1.  **Clone the Repository**:

    bashCopy code

    `git clone https://github.com/your-username/vite-react-admin.git`

2.  **Install Dependencies**:

    bashCopy code

    `cd vite-react-admin npm install`

3.  **Start the Development Server**:

    bashCopy code

    `npm run dev`

    This will start the development server, and you can access the admin panel at `http://localhost:3000`.

4.  **Build for Production**:

    When you're ready to deploy your admin panel, you can create a production build using the following command:

    bashCopy code

    `npm run build`

5.  **Bundle Analysis**:

    To analyze the size of your project's bundles, you can run the following command:

    bashCopy code

    `npm run analyze`

6.  **Linting and Formatting**:

    You can check and format your code using the following commands:

    - Linting: `npm run lint`
    - Formatting: `npm run format`

## Customization

Here are some areas you might want to customize for your admin panel:

- **Authentication**: Replace the dummy authentication with your authentication logic and user data.
- **Routes**: Define your application routes in `src/routes/index.js`.
- **Styling**: Customize the UI styles by modifying the Ant Design theme or adding your custom CSS.
- **Redux**: Extend or modify the Redux store to manage the application's state as per your requirements.

## Project Structure

The project is organized as follows:

- `src/` - Contains the main source code for your admin panel.
  - `assets/` - Place static assets like images, fonts, or styles here.
  - `components/` - Reusable React components.
  - `pages/` - React components that represent different pages or views.
  - `routes/` - Define your application routes here.
  - `store/` - Redux store configuration and actions.
  - `utils/` - Utility functions and helpers.
- `public/` - Static files that will be served as-is.
- `vite.config.js` - Configuration for the Vite build tool.
- `babel.config.js` - Babel configuration.
- `eslintrc.js` - ESLint configuration.
- `prettierrc.js` - Prettier configuration.

## Contributing

If you find issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. You can find the license details in the `LICENSE` file.

---

Happy coding! 🚀

# We Are Happy Front-End

## Go to section

- [Description](#description)
- [Tools Used](#tools-used)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Testing](#testing)

## Description

Functionality
Company WeAreHappy wants to have an idea of the happiness of its employees. In
order to do so, they need a system to capture that happiness anonymously. When
going home from a hard day's work, each employee can indicate how their day
was. There are 3 moods:

:-) :-| :-(

The "vote" is stored anonymously in persistent storage on the back-end. This vote
can be done via an HTTP API or via a simple web application. Both will need to be
implemented for this assignment.
At any moment the manager can request statistics of the (average) happiness of
the employees that day, week or month. Again, both API and the web app need to
support this use case. Note these statistics should only be visible to the manager,
so this functionality should be protected. For the first implementation however,
this protection can be very basic.

Use cases

- An employee casts a vote anonymously
- The manager views the statistics
  - of the current day
  - of the current week
  - of the current month

## Tools Used

[Back to top](#We-Are-Happy-Front-End)

- Framework: React
- Database Client: Apollo Client
- CSS: styled-components
- Others:
  - Generating TypeScript types basing on GraphQL schema: graphql-codegen

## Installation and running

[Back to top](#We-Are-Happy-Front-End)

### `npm install`

Install the application before the first run

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

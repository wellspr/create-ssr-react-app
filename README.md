# SSR React App

A server side rendered React app starter boilerplate.

# Repository

    https://github.com/wellspr/create-ssr-react-app


# Install 

    npx create-ssr-react-app <project-name>

# Run

    cd <project-name> && npm start

Wait until build finishes then go to [http://localhost:4000](http://localhost:4000)

# Starting a development server
At the root of the project run

    npm run dev

Wait until build finishes then go to [http://localhost:4000](http://localhost:4000).

### Default port

The project's default port is set to `4000`; to change this open the `./src/config/index.js` file and edit it.

# Creating a production build
At the root at the file run 

    npm run prod:build

To run the production build locally, at the root of the project run

    npm run prod

Else, `cd` into the `prod` directory and run

    npm run local

## Deploy to gCloud

It is possible to build the project locally and deploy the contents of the `prod` directory into gCloud.

# Get started editing

## Config 

Open the file `./src/config/index.js` and edit the `appBrandName` and the `githubLink` to proper values. Also, you can change the app's `port`.

## Pages

Each page corresponds to a specific route. To create a new page,

1) Define your new page component inside the `pages` folder.

2) The routes are controlled by the react router config. Go to `routes/index.js` and define a new route.

3) Update `components/AppNavbar/dropdownLinks.js` and `components/AppNavbar/topNavbarLinks.js` accordingly.

## Components

All components that don't define a route (or a page).

## Redux

Redux is pre-configured and pre-wired for use.


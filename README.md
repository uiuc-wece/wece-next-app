This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone the repository

First, clone the project.

```bash
git clone https://github.com/uiuc-wece/wece-next-app.git
```

## Getting Started - Client

Inside the repository, go into the client folder.

```bash
cd client
```

Then, install packages. Run the following:

```bash
npm install
```

To run the development frontend:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. This renders the frontend of the site.

## Getting Started - Server

Inside the repository, go into the api folder.

```bash
cd api
```

Then, install packages. Run the following:

```bash
npm install
```

To run the development server:

```bash
npm run start
```

The api will be served out of [http://localhost:3003](http://localhost:3003).


## Client (/client)

### constants.js
This file exports `base_url` that sets the base url for endpoints.

### /public
Contains static images and pages.
`/imgs` has all the images for the website.
`/newsletterarchive` has the HTML files for all WECE newsletters.

###  /pages
Contains the pages of the website.

### /components
Contains the React components used to build pages.

### /styles
Contains the css files for each of the pages and components.

### /data
Contains static data used to populate pages.

## Server (/api)

### server.js
This is the file that starts the custom Express server for the WECE website. All routes are served out of `/api`.

### /server/database
Inside is the setup for the MongoDB database.

### /server/routes
This folder contains all routes for the server where routes are served from `/api/{route_name}`.

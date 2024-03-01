<h1 align="center">
  <a href="https://wece.ece.illinois.edu/"><img src="https://user-images.githubusercontent.com/65576812/178602976-d20bd1cc-31f6-486a-98c2-488a908d2997.png" alt="UIUC WECE Logo" width="300"></a>
  <br/>
  Women in Electrical and Computer Engineering
  </br>
</h1>
<p>

<p align="center">
  <a href="#background">Background</a> •
  <a href="#contribute">Contribute</a> •
  <a href="#documentation">Documentation</a> 
</p>

## Background 
We are WECE, the Women in Electrical and Computer Engineering - a student organization at the University of Illinois at Urbana-Champaign dedicated to supporting women within the Illinois ECE department. The webapp was initiated by former Infrastruture Director [Eugenia Chen](https://www.linkedin.com/in/eugenia-chen-3aa251131/) and managed by [Joshmita Chintala](https://www.linkedin.com/in/joshmita-chintala-74a1b01a8/) and [Estrella Popoca](https://www.linkedin.com/in/elliepopoca/). This site is now maintained by current Infrastructure Director at WECE, Gabriela Hinostroza Perez. 

<br />

## Contribute
For local development, please clone this repository. 
```
git clone https://github.com/uiuc-wece/wece-next-app.git
```
### Client and Server
Inside the repo, open the client folder `cd client`, and then install your packages with `npm install`. Run the frontend with `npm run dev`. Open http://localhost:3000 with your browser to see the result. This renders the frontend of the site. Follow the same set of instructions in `cd api`. 

<br />

## Documentation

### Client (/client)

#### constants.js
This file exports `base_url` that sets the base url for endpoints.

#### /public
Contains static images and pages.
`/imgs` has all the images for the website.
`/newsletterarchive` has the HTML files for all WECE newsletters.

####  /pages
Contains the pages of the website.

#### /components
Contains the React components used to build pages.

#### /styles
Contains the css files for each of the pages and components.

#### /data
Contains static data used to populate pages.

### Server (/api)

#### server.js
This is the file that starts the custom Express server for the WECE website. All routes are served out of `/api`.

#### /server/database
Inside is the setup for the MongoDB database.

#### /server/routes
This folder contains all routes for the server where routes are served from `/api/{route_name}`.

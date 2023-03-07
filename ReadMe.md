# Xenon Stack Assesment 

- Uses flash messages using Css
- added authentication that contact us can only be seen by authenticated users only using middleware
- passport is used as autheication middleware
- its a session based authentication
- got dynamic data i.e name of person on navbar
- person cannot access Home page but if he wants to access other it will need autentication.
- created frontend using html , css , js , jquery , boostrap.
- ejs is used as a template engine to display dynamic data like username on home page after login.
- session are created on mongo db.
- Proper middleware is used for authentication.
- owl caraousel is used.
- contact us form data is stored in model contact in mongo db .
- aslo used flash messages to display success messages to the user after successfull contact us form .


- Bootstrap is used. 
- fontawesome  and bootrsap icons are  used for fonts.
- owl slider is used on home page
- animate css is used to animate the elements.
- swiper slider  is used for website.

- isotope js
- counter js
- custom js
jquery used in frontend.


# Xenon Stack Assesment 

This is a Node js application with frontend as HTML , CSS , JS , Bootstrap(for responsiveness) and backend as express and ejs template engine for dynamic data
**Created in Submission for Round 2 of Xenon Stack**.
!["Homepage"](./public/assets/images/home%20with%20username.png)

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.3

    $ npm --version
    6.14.13


## Project Set Up  

    $ git clone https://github.com/har412/XenonStackAssesment.git
    $ npm install
    




## Running the project

    $ node app.js

# Theme 
##  Harkirat Technologies
- Created a Web App for a Service based Company which offers IT Solutions to Clients.

# Functionalities

## Session Based Authentication with Passport js
- using passport js implemented session based authentication in which sessions were store in Mongo Db in collection named as sessions.

!["login"](./public/assets/images/login.png)
- After successfull login user object can be found in ***req.session.passport.user***

- Thus Showed Name of User in Navbar after Successful login.

!["show_name"](./public/assets/images/Dynamic%20EJS%20used.png)
- User Registration is implemented to create a new user sucessfully.

!["Register"](./public/assets/images/register%20with%20flash%20message.png)


## Used Middleware to Ensure All Webpages are locked untill authenticated except Home Page
- Lock Icon is Given to the pages on home page which are locked without login.
!["middleware"](./public/assets/images/middleware.png)

## Mongo DB - Atlas is used as a Cloud Database
!["middleware"](./public/assets/images/mongo_db_as_home.png)

### 3 Collections are created
- ***Contact form*** --> To store user messages from website
- ***users*** --> To store User Credentials
- ***session*** --> To store/maintain sessions

## Template Engine EJS is used for dynamic rendering
- Used EJS to display the name of user signed In on navbar after sucessfull Login
!["show_name"](./public/assets/images/Dynamic%20EJS%20used.png)

## Flash Messages for Errors and Warnings While Login/Register.
- Flash messages are implemented to inform user about wrong password, User Already Exist etc.

!["show_name"](./public/assets/images/contact_with_flash.png)
## Responsive Frontend Using HTML, CSS, JS , Bootstrap

### Home Page
!["show_name"](./public/assets/images/home_responsive.png)

### Services


### Our Work Page
!["show_name"](./public/assets/images/responsive%20work.png)

### Team


### Contact Us
!["show_name"](./public/assets/images/contact_with%20_info.png)

!["show_name"](./public/assets/images/responsive%20contact.png)

## Contact Us form Stores data in Contact-form Collection in Mongo DB.
- Messages, contact number, email , name are store in Databse and user is given a success message on completion.

!["show_name"](./public/assets/images/Contact_message_inDB.png)




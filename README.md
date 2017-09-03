
## Saja Academy Tae Kwon Do
TKD is the project name (stands for Tae Kwon Do).  It is a website for the non-profit Saja Academy of Martial Arts in Stevensville.  It is a full-service website that showcases the Saja Academy and will enhance the academy’s current marketing efforts as well as its program administration.  Built with React JS on the front-end and integrating with a mySQL database on the back-end, the site also has a Stripe payment portal for students’ fee payments. This is the database portion of the website.

* Based on create-react-app
* Node/Express backend
* MySQL connection

## Getting this App up and running

1. Install npm packages
 ```
 Inside root of TKD
 npm install
 cd TKD/PaymentBackend
 npm install
 cd TKD/TKD-client
 npm install
 ```


 2. Start both server and client
  ```
  cd TKD/TKD-client
  npm start
  ```
  The last lines of the output should be
  ```
  Starting the development server...

  Compiled successfully!

  The app is running at:

    http://localhost:3000/

  Note that the development build is not optimized.
  To create a production build, use npm run build.
  ```
  You can now point your browser to http://localhost:3000/!


3. Set up testing database

 In the terminal log in as root and used the sample.sql file included in this repo
 ```
 mysql -u root
 mysql> source sample.sql;
 ```

 At this point you can test the actual connection to the database.
 ```
 mysql> use books;
 mysql> show tables;
 ```
 You should get:
 ```
 +-----------------+
 | Tables_in_books |
 +-----------------+
 | authors         |
 +-----------------+
 1 row in set (0.00 sec)
 ```

* Testing the database

At this point you can test the actual connection to the database.

Start your server again:

```
npm run server
```

Then, submit a query to your db - from another terminal window:

```
curl localhost:3001/api/books?firstName=William | jq '.'
```

You should see

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    71  100    71    0     0   2257      0 --:--:-- --:--:-- --:--:--  2290
[
  {
    "last_name": "Shakespeare",
    "first_name": "William",
    "middle_name": null
  }
]
```
## Deployment
This app has been deployed to Heroku. It can be found at: 

## Authors
Montana Code School Part Time Class of 2017

//This lib helps to hash password - possibly will need to move to the utils file
const bcrypt = require('bcrypt');

//const dotenv = require('dotenv').config();

//const path = require('path');
// Connect express lib as content generation engine
const express = require('express');
// Manages sessions for express.js applications
const session = require('express-session');

// This lib allows develop handlebars for express
const exphbs = require('express-handlebars');

// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

//// import sequelize connection
const sequelize = require('./config/connection');

// // This lib connect-session-sequelize is a SQL session store
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// // Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// // Inform Express.js on which template engine to use
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http://127.0.0.1:' + PORT));
});

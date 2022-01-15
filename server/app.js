const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionFileStore = require('session-file-store')(expressSession);
const bcrypt = require('bcrypt');
const indexRouter = require('./routes/index.router'); // Index router req
const registrationRouter = require('./routes/registration.router');
const logoutRouter = require('./routes/logout.router');
const loginRouter = require('./routes/login.router');
const profileRouter = require('./routes/profile.router');
const editProfileRouter = require('./routes/editProfile.router');
const createRouter = require('./routes/create.router');
const editCardProfile = require('./routes/cardEdit.router');

const PORT = process.env.PORT ?? 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.locals.title = 'The amazing title!'; // Change app locals

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: 'I LOVE CATS',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // for req.body
app.use(express.json());

app.use('/', indexRouter); // Index router setup
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);
app.use('/edit/', editProfileRouter);
app.use('/create', createRouter);
app.use('/card/edit/', editCardProfile);

app.listen(PORT, () => {
  console.log(`*** Server started on port ${PORT} ***`);
});

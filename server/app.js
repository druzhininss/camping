const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionFileStore = require('session-file-store')(expressSession);
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
// const bcrypt = require('bcrypt');

const productsRouter = require('./routes/products.router');
const registrationRouter = require('./routes/registration.router');
const logoutRouter = require('./routes/logout.router');
const loginRouter = require('./routes/login.router');
const profileRouter = require('./routes/profile.router');
const adminRouter = require('./routes/admin.router');
const ordersRouter = require('./routes/orders.router');

const PORT = process.env.PORT ?? 5000;

const app = express();

// app.use(helmet());

// dotenv.config();

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

const corsOptions = {
  origin: ['http://localhost:3000'], // TODO: access on build ?
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(morgan('dev'));
app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(cors(corsOptions)); // cors init
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/categories', productsRouter); // Products router
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);
app.use('/admin', adminRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`*** Server started on port ${PORT} ***`);
});

"use strict";

const express = require('express');
const cors = require('cors');
const { NotFoundError } = require('./expressError');
const Guest = require('./guest.model');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/check', async (req, res, next) => {
  try {
    const guest = await Guest.checkGuest(req.body);
    res.status(200).json({ guest });
  } catch (err) {
    return next(err);
  };
});

app.post('/not-coming', async (req, res, next) => {
  try {
    const guest = await Guest.markNotComing(req.body);
    return res.json({ guest });
  } catch (err) {
    return next(err);
  };
});

app.post('/coming', async (req, res, next) => {
  try {
    const guest = await Guest.markComing(req.body);
    return res.json({ guest });
  } catch (err) {
    return next(err);
  };
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { status, message }
  });
});

module.exports = app;
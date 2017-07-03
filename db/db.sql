-- Check ReadMe Documentation

DROP DATABASE IF EXISTS barrens;
CREATE DATABASE barrens;

-- Command to Connect to DB
\c barrens;

-- Enable PostGIS (includes raster); Required for geo-location
-- You should use GEOMETRY somewhere in the areas so you can use ST_Contains
CREATE EXTENSION postgis;

CREATE TABLE areas (
  ID SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  minLong DOUBLE PRECISION,
  minLat DOUBLE PRECISION,
  maxLong DOUBLE PRECISION,
  maxLat DOUBLE PRECISION
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  points INTEGER,
  salt VARCHAR UNIQUE
);
-- chkpass is alternative data type, needs ckpass module installed

CREATE TABLE events (
  ID SERIAL PRIMARY KEY,
  area integer REFERENCES areas (id),
  description VARCHAR,
  url VARCHAR
);

CREATE TABLE channels (
  ID SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  users INTEGER REFERENCES users (id),
  areas INTEGER REFERENCES areas (id)
);

CREATE TABLE messages (
  ID SERIAL PRIMARY KEY,
  username INTEGER REFERENCES users (id),
  content TEXT NOT NULL,
  channels INTEGER REFERENCES channels (id),
  upvotes SMALLINT,
  downvotes SMALLINT,
  area INTEGER REFERENCES areas (id),
  stamp TIMESTAMPTZ,
  location POINT
);

-- Table Schema for Authentication
-- TimeStamp TZ - Data Type that includes time, date, time zone
CREATE TABLE session (
  ID SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  area VARCHAR,
  stamp TIMESTAMPTZ
);

-- Attendees, Join would be many events to many users
-- CREATE TABLE users_events (
--   ID SERIAL PRIMARY KEY,
--   users
--   events
-- );
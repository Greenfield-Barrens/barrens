# Barrens DB Documentation

> Location-based chat app with epic point system

## Victorious Vipers

  - Mason Raasch (@man-of-seafood)
  - Arthur Liou (@artliou)
  - Brian Wong (@bwong858)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Notes
Barren's Database Table Schema
Currently 6 Schemas

Documentation & Resources:

https://www.postgresql.org/docs/current/static/index.html

http://postgresguide.com/sql/select.html

http://postgresguide.com/

> PSQL Useful Commands

Enter PSQL Prompt

psql

IMPORTANT: To Run the DB's sql file in PSQL

psql -f db.sql

List all DBs

\l

Connect to a particular DB

\c dbName

View all Tables

\d or \dt (for all user created tables)

Exit out of PSQL

Control + D, or
\q

Delete rows from table

Delete from [table-name]

> Useful PSQL SQL Queries

Query
"SELECT username, points FROM users;"

Filtering Data
"SELECT content, upvotes
FROM messages
WHERE lat >= '2012-01-01'
  AND long < '2012-02-01'
 ;"

## Geo-Location Notes
> SQL Commands

Finding All users in an area

"SELECT areas.name FROM areas, messages WHERE ST_Contains(areas.geom, messages.geom);"

Creating Areas:

"INSERT into areas VALUES (string, create polygon with location);"

"INSERT into areas VALUES (DEFAULT, 'Noe-Mission', ST_Polygon(ST_GeomFromText('LINESTRING(37.7453366 -122.4379927, 37.7481003 -122.415084, 37.76088 -122.4127313, 37.7607018 122.4360408, 37.7453366 -122.4379927)'), 4326)); " To create a box (4 edges), you will need to specify 5 coordinate pairs. (To close the box, you must create a line from the end of the last line back to the original point) 

Additionally, to make use of the auto-increment that comes with a 'SERIAL' column, you must specify 'DEFAULT' in the SERIAL-ized column value position.

Sample Code/Template
"GeomFromText('POLYGON((long1 lat1, long2 lat2, long3 lat3))');"
--
ST_Polygon(ST_GeomFromText('LINESTRING(75.15 29.53,77 29,77.6 29.5, 75.15 29.53)'), 4326);

Creating Long & Lat Points for Messages (x, y)

"INSERT into messages VALUES (etc, etc, etc, ST_SetSRID(ST_MakePoint(longitude, latitude),4326); );"

> ST_Contains — Returns true if and only if no points of B lie in the exterior of A, and at least one point of the interior of B lies in the interior of A.
IE: if B is completely in A

Sample Command: "SELECT ST_Contains("POLYGON", ST_SetSRID(ST_MakePoint(-71.0, 42.3),4326)) FROM areas"

> PostGIS Resources:

https://gist.github.com/clhenrick/ebc8dc779fb6f5ee6a88 (postGIS cheat-sheet)

http://postgis.net/

https://postgis.net/docs/ST_MakePoint.html

https://postgis.net/docs/ST_Contains.html

## Requirements

- Postgresql 9.1.x
- PostGIS

## Development

### Installing Dependencies

From within the root directory:

npm install pg

brew install postgis
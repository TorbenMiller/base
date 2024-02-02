CREATE EXTENSION "uuid-ossp";

CREATE TABLE PlaceHolder (
    id uuid PRIMARY KEY,
    property_1 VARCHAR(255) NOT NULL,
    property_2 integer NOT NULL,
);
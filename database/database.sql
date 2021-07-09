CREATE DATABASE abalatdb;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    gender VARCHAR(255),
    batch INTEGER,
    phoneNumber INTEGER,
    school_id VARCHAR(255),
    department VARCHAR(255),
    nisehaAbat VARCHAR(255),
    muyaKifil VARCHAR(255)
);


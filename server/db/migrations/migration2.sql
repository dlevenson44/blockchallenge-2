DROP TABLE IF EXISTS btc_data;
CREATE TABLE IF NOT EXISTS btc_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd TEXT,
    us_high TEXT,
    us_low TEXT,
    eur TEXT,
    eur_high TEXT,
    eur_low TEXT,
    trades TEXT,
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT
);

DROP TABLE IF EXISTS dash_data;
CREATE TABLE IF NOT EXISTS dash_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd TEXT,
    us_high TEXT,
    us_low TEXT,
    eur TEXT,
    eur_high TEXT,
    eur_low TEXT,
    trades TEXT,
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT
);

DROP TABLE IF EXISTS eth_data;
CREATE TABLE IF NOT EXISTS eth_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd TEXT,
    us_high TEXT,
    us_low TEXT,
    eur TEXT,
    eur_high TEXT,
    eur_low TEXT,
    trades TEXT,
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT
);

DROP TABLE IF EXISTS ltc_data;
CREATE TABLE IF NOT EXISTS ltc_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd TEXT,
    us_high TEXT,
    us_low TEXT,
    eur TEXT,
    eur_high TEXT,
    eur_low TEXT,
    trades TEXT,
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT
);
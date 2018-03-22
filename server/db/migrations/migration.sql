DROP TABLE IF EXISTS btc_data
CREATE TABLE IF NOT EXISTS btc_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd DECIMAL,
    us_high DECIMAL,
    us_low DECIMAL,
    eur DECIMAL,
    eur_high DECIMAL,
    eur_low DECIMAL,
    trades INT,
    one_hour DECIMAL,
    one_day DECIMAL,
    one_week DECIMAL
);

DROP TABLE IF EXISTS dash_data
CREATE TABLE IF NOT EXISTS dash_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd DECIMAL,
    us_high DECIMAL,
    us_low DECIMAL,
    eur DECIMAL,
    eur_high DECIMAL,
    eur_low DECIMAL,
    trades INT,
    one_hour DECIMAL,
    one_day DECIMAL,
    one_week DECIMAL
);

DROP TABLE IF EXISTS eth_data
CREATE TABLE IF NOT EXISTS eth_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd DECIMAL,
    us_high DECIMAL,
    us_low DECIMAL,
    eur DECIMAL,
    eur_high DECIMAL,
    eur_low DECIMAL,
    trades INT,
    one_hour DECIMAL,
    one_day DECIMAL,
    one_week DECIMAL
);

DROP TABLE IF EXISTS ltc_data
CREATE TABLE IF NOT EXISTS ltc_data(
    id SERIAL PRIMARY KEY,
    time_made BIGINT,
    usd DECIMAL,
    us_high DECIMAL,
    us_low DECIMAL,
    eur DECIMAL,
    eur_high DECIMAL,
    eur_low DECIMAL,
    trades INT,
    one_hour DECIMAL,
    one_day DECIMAL,
    one_week DECIMAL
);


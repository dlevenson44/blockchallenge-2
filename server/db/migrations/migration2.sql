DROP TABLE IF EXISTS currency;
CREATE TABLE IF NOT EXISTS currency(
    id SERIAL PRIMARY KEY,
    cryptocurrency VARCHAR
);

DROP TABLE IF EXISTS cap_coin;
CREATE TABLE IF NOT EXISTS cap_coin(
    id SERIAL PRIMARY KEY,
    usd TEXT,
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT
);

DROP TABLE IF EXISTS kraken;
CREATE TABLE IF NOT EXISTS kraken(
    id SERIAL PRIMARY KEY,
    eur TEXT,
    eur_low TEXT,
    eur_high TEXT,
    trades TEXT
);

DROP TABLE IF EXISTS polo;
CREATE TABLE IF NOT EXISTS polo(
    id SERIAL PRIMARY KEY,
    us_high TEXT,
    us_low TEXT
);

ALTER TABLE cap_coin
ADD COLUMN crypto_id INTEGER REFERENCES currency(id);

ALTER TABLE kraken
ADD COLUMN crypto_id INTEGER REFERENCES currency(id);

ALTER TABLE polo
ADD COLUMN crypto_id INTEGER REFERENCES currency(id);
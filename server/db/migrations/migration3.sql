DROP TABLE IF EXISTS tracked_data;
CREATE TABLE IF NOT EXISTS tracked_data(
    id SERIAL PRIMARY KEY,
    crypto_id INT,
    time_made BIGINT,
    trades TEXT,    
    one_hour TEXT,
    one_day TEXT,
    one_week TEXT,
    usd TEXT,
    us_high TEXT,
    us_low TEXT,
    eur TEXT,
    eur_high TEXT,
    eur_low TEXT
);
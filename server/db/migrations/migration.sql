DROP TABLE IF EXISTS tracked_data;
CREATE TABLE IF NOT EXISTS tracked_data(
    id SERIAL PRIMARY KEY,
    -- track when data was collected
    time_made BIGINT,
    -- alt per btc values
    dash_per_btc INT,
    eth_per_btc INT,
    ltc_per_btc INT,
    -- btc data
    btc_usd INT,
    btc_us_high INT,
    btc_us_low INT,
    btc_eur INT,
    btc_eur_high INT,
    btc_eur_low INT,
    btc_one_hour INT,
    btc_24_hours INT,
    btc_7_days INT,
    -- dash data
    dash_usd INT,
    dash_us_high INT,
    dash_us_low INT,
    dash_eur INT,
    dash_eur_high INT,
    dash_eur_low INT,
    dash_trades INT,
    dash_one_hour INT,
    dash_24_hours INT,
    dash_7_days INT,
    -- eth data
    eth_usd INT,
    eth_us_high INT,
    eth_us_low INT,
    eth_eur INT,
    eth_eur_high INT,
    eth_eur_low INT,
    eth_trades INT,
    eth_one_hour INT,
    eth_24_hours INT,
    eth_7_days INT,
    -- ltc data
    ltc_usd INT,
    ltc_us_high INT,
    ltc_us_low INT,
    ltc_eur INT,
    ltc_eur_high INT,
    ltc_eur_low INT,
    ltc_trades INT,
    ltc_one_hour INT,
    ltc_24_hours INT,
    ltc_7_days INT
);
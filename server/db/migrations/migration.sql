DROP TABLE IF EXISTS tracked_data;
CREATE TABLE IF NOT EXISTS tracked_data(
    id SERIAL PRIMARY KEY,
    -- track when data was collected
    time_made TEXT,
    -- alt per btc values
    dash_per_btc TEXT,
    eth_per_btc TEXT,
    ltc_per_btc TEXT,
    -- btc data
    btc_usd TEXT,
    btc_us_high TEXT,
    btc_us_low TEXT,
    btc_eur TEXT,
    btc_eur_high TEXT,
    btc_eur_low TEXT,
    btc_trades TEXT,
    btc_one_hour TEXT,
    btc_24_hours TEXT,
    btc_7_days TEXT,
    -- dash data
    dash_usd TEXT,
    dash_us_high TEXT,
    dash_us_low TEXT,
    dash_eur TEXT,
    dash_eur_high TEXT,
    dash_eur_low TEXT,
    dash_trades TEXT,
    dash_one_hour TEXT,
    dash_24_hours TEXT,
    dash_7_days TEXT,
    -- eth data
    eth_usd TEXT,
    eth_us_high TEXT,
    eth_us_low TEXT,
    eth_eur TEXT,
    eth_eur_high TEXT,
    eth_eur_low TEXT,
    eth_trades TEXT,
    eth_one_hour TEXT,
    eth_24_hours TEXT,
    eth_7_days TEXT,
    -- ltc data
    ltc_usd TEXT,
    ltc_us_high TEXT,
    ltc_us_low TEXT,
    ltc_eur TEXT,
    ltc_eur_high TEXT,
    ltc_eur_low TEXT,
    ltc_trades TEXT,
    ltc_one_hour TEXT,
    ltc_24_hours TEXT,
    ltc_7_days TEXT
);
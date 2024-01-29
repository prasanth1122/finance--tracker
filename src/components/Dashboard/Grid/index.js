import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

export default function Grid({ coin }) {
  return (
    <div
      className={`grid_container ${
        coin.price_change_percentage_24h < 0 && "grid_container_red"
      }`}
    >
      <div className="info_flex">
        <img alt={coin.name} src={coin.image} className="coin_logo" />
        <div className="name_col">
          <p className="coin_symbol">{coin.symbol}</p>
          <p className="coin_name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip_flex">
          <div className="price_chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon_chip">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip_flex">
          <div className="price_chip chip_red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon_chip chip_red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="info_container">
        <h3
          className="coin_price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          {" "}
          $ {coin.current_price.toLocaleString()}
        </h3>
        <p className="total_volume">
          Total Volume: {coin.total_volume.toLocaleString()}
        </p>
        <p className="total_volume">
          Total MarketCap: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

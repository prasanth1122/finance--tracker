import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import convertNumber from "../../../functions/convertNumber.js";

export default function List({ coin }) {
  return (
    <tr className="list_row ">
      <td className="td_img">
        <img
          alt={coin.name}
          src={coin.image}
          className="coin_logo mobile_image"
        />
      </td>
      <td>
        <div className="name_col">
          <p className="coin_symbol">{coin.symbol}</p>
          <p className="coin_name">{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip_flex ">
          <div className="price_chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon_chip td_icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip_flex">
          <div className="price_chip chip_red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon_chip chip_red td_icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      <Tooltip title="Current Price">
        <td>
          <h3
            className="coin_price td_center td_current_price"
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
        </td>
      </Tooltip>

      <td>
        <p className="total_volume td_right td_total_volume">
          {coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td className="desktop_style">
        <p className="total_volume td_right td_total_volume">
          ${coin.market_cap.toLocaleString()}
        </p>
      </td>
      <td className="mobile_style">
        <p className="total_volume td_right">
          ${convertNumber(coin.market_cap)}
        </p>
      </td>
    </tr>
  );
}

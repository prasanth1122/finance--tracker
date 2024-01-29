import React, { useState } from "react";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import "./styles.css";

export default function SearchBar({ search, onsearchChange }) {
  return (
    <div className="search_flex">
      <SearchOffRoundedIcon />
      <input
        placeholder="search"
        type="text"
        value={search}
        onChange={(e) => onsearchChange(e)}
      />
    </div>
  );
}

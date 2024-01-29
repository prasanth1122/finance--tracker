import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";

import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import SearchBar from "../components/Dashboard/Search";
export default function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const onsearchChange = (e) => {
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <SearchBar search={search} onsearchChange={onsearchChange} />
      <TabsComponent coins={filteredCoins} />
    </div>
  );
}

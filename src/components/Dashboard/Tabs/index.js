import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import "./styles.css";
import List from "../List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TabContext value={value}>
          <div>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Grid" value="grid" sx={style} />
              <Tab label="List" value="list" sx={style} />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className="grid_flex">
              {coins.map((coin, i) => {
                return <Grid coin={coin} key={i} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className="list_table mobile_table">
              {coins.map((item, i) => {
                return <List coin={item} key={i} />;
              })}
            </table>
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import Day from "./components/Day";
import Month from "./components/Month";
import Week from "./components/Week";
import styled from "styled-components";
import Theme from "./components/Theme";

const ThemeNav = styled.span`
  cursor: pointer;
`;

const day = "DAY";
const week = "WEEK";
const month = "MONTH";

function App() {
  const [onDay, setOnDay] = useState(true);
  const [onWeek, setOnWeek] = useState(false);
  const [onMonth, setOnMonth] = useState(false);
  const [onTheme, setOnTheme] = useState(false);
  const navClick = (theme: string) => {
    if (theme === day) {
      setOnDay(true);
      setOnWeek(false);
      setOnMonth(false);
    } else if (theme === week) {
      setOnDay(false);
      setOnWeek(true);
      setOnMonth(false);
    } else if (theme === month) {
      setOnDay(false);
      setOnWeek(false);
      setOnMonth(true);
    }
  };

  const SetMain = () => {
    if (onWeek) return <Week />;
    if (onMonth) return <Month />;
    return <Day />;
  };
  return (
    <div>
      <div>
        <ThemeNav onClick={() => setOnTheme((prev) => !prev)}>Theme</ThemeNav>
        <ThemeNav onClick={() => navClick(day)}>Day</ThemeNav>
        <ThemeNav onClick={() => navClick(week)}>Week</ThemeNav>
        <ThemeNav onClick={() => navClick(month)}>Month</ThemeNav>
      </div>
      {onTheme ? <Theme /> : null}
      <SetMain />
    </div>
  );
}

export default App;

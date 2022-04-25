interface IWeek {
  [key: number]: string;
}
const todayNum = new Date().getDay();
const week: IWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const TODAY = week[todayNum];

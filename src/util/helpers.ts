import episodeOne from "../img/posters/1.jpg";
import episodeTwo from "../img/posters/2.jpg";
import episodeThree from "../img/posters/3.jpg";
import episodeFour from "../img/posters/4.jpg";
import episodeFive from "../img/posters/5.jpg";
import episodeSix from "../img/posters/6.jpg";
import episodeSeven from "../img/posters/7.jpg";

export const posters = [
  episodeOne,
  episodeTwo,
  episodeThree,
  episodeFour,
  episodeFive,
  episodeSix,
  episodeSeven,
];

export const numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
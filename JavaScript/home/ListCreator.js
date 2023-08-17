const items = document.querySelectorAll(".list-item");
const texts = document.querySelectorAll(".list-item-text");

const images = [
  "/home/list/football.jpg",
  "/home/list/cricket.jpg",
  "/home/list/volleyball.jpg",
  "/home/list/badminton.jpg",
  "/home/list/chess.jpg",
  "/home/list/carrom.jpg",
  "/home/list/billiards.jpg",
  "/home/list/table-tennis.jpg",
  "/home/list/foosball.jpg",
];

const names = [
  "Football",
  "Cricket",
  "Volleyball",
  "Badminton",
  "Chess",
  "Carrom",
  "Snooker",
  "Table Tennis",
  "Foosball",
];

const urls = [
  "/sport/football",
  "/sport/cricket",
  "/sport/volleyball",
  "/sport/badminton",
  "/sport/chess",
  "/sport/carrom",
  "/sport/snooker",
  "/sport/table-tennis",
  "/sport/foosball",
];

export default function ListCreator() {
  items.forEach((item, index) => {
    item.setAttribute("href", urls[index]);
    item.style.backgroundImage = `url(${images[index]})`;
    texts[index].textContent = names[index];
  });
}

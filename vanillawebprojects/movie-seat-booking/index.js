const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
let movieId = movieSelect.options[movieSelect.selectedIndex].innerText;

function updateCount() {
  const seatsSelected = document.querySelectorAll(".row .seat.selected");
  const lenOfSeatsSelected = seatsSelected.length;
  count.innerText = lenOfSeatsSelected;
  total.innerText = lenOfSeatsSelected * ticketPrice;
}

movieSelect.addEventListener("change", (e) => {
  const { value, selectedIndex, options } = e.target;
  ticketPrice = +value;

  movieId = options[selectedIndex].innerText;
  const obj = localStorage.getItem(movieId);
});
seats.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    updateCount();
  });
});

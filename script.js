let thanks = document.getElementById("thanks");
let rate = document.getElementById("rate");
let btn_submit = document.getElementById("submit");
let selection = document.getElementById("selection");
let btn_rate = document.querySelectorAll(".rating");
let user_rate = 6;

btn_submit.addEventListener("click", submit_rate, false);
btn_rate.forEach(btn => {
  btn.addEventListener("click", rating, false);
});



function submit_rate() {
  if (user_rate==6) {
    alert("You didn't choose a value");
  }
  else {
    selection.innerHTML = "You selected " + user_rate + " out of 5";
    rate.style.display = "none";
    thanks.style.display = "flex";
  }
}

function rating() {
  user_rate = event.target.innerHTML;
}

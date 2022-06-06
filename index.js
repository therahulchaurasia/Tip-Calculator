const bill_amt = document.getElementById("bill_amount");
const button = document.querySelectorAll(".single_button");
const people = document.getElementById("people_input");
const zero_lb = document.getElementById("zero_label");
const fn_tip_amt = document.querySelector(".final_tip_amt");
const fn_total = document.querySelector(".final_total_amt");
const custom_per = document.querySelector("#custom_percentage");
const reset = document.querySelector(".reset_btn");
const amt_lb = document.getElementById("amt_label");
// console.log(custom_per);

// console.log(bill_amt);

// const myfunction = () => {
//   const bill_value = bill_amt.value;
//   console.log(+bill_value);
// };
const calcbuttonClick = (btn) => {
  const bill_value = bill_amt.value;
  const people_count = people.value;
  const button_value = parseInt(btn.innerHTML);
  reset.disabled = false;
  button.forEach((butn) => {
    butn.classList.remove("clicked_button");
  });
  btn.classList.add("clicked_button");
  // console.log(+bill_value, +people_count, +button_value);
  const tip_amt =
    Math.round(((button_value * bill_value) / 100 / people.value) * 100) / 100;
  const total_per_p =
    Math.round((bill_value / people_count + tip_amt) * 100) / 100;
  if (bill_value < 1 && people_count < 1) {
    bill_amt.classList.remove("cool");
    bill_amt.focus();
    amt_lb.classList.remove("other-one");
  }
  if (people_count < 1 && bill_value >= 1) {
    people.classList.remove("cool");
    people.focus();
    zero_lb.classList.remove("other-one");
  }
  if (bill_value >= 1 && people_count >= 1) {
    fn_tip_amt.innerHTML = `$${tip_amt}`;
    fn_total.innerHTML = `$${total_per_p}`;
  }
  // customInputPercentage();
  // console.log(tip_amt, total_per_p);
  // console.log(button_value);
};

const customInputPercentage = () => {
  const bill_value = +bill_amt.value;
  const people_count = +people.value;
  const custom_val = +custom_per.value;
  reset.disabled = false;
  button.forEach((butn) => {
    butn.classList.remove("clicked_button");
  });
  const tip_amt =
    Math.round(((custom_val * bill_value) / 100 / people.value) * 100) / 100;
  const total_per_p =
    Math.round((bill_value / people_count + tip_amt) * 100) / 100;
  if (bill_value < 1 && people_count < 1) {
    bill_amt.classList.remove("cool");
    bill_amt.focus();
    amt_lb.classList.remove("other-one");
  }
  if (people_count < 1 && bill_value >= 1) {
    people.classList.remove("cool");
    people.focus();
    zero_lb.classList.remove("other-one");
  }
  if (bill_value >= 1 && people_count >= 1) {
    fn_tip_amt.innerHTML = `$${tip_amt}`;
    fn_total.innerHTML = `$${total_per_p}`;
  }
  // console.log(bill_value, people_count, custom_val);
};
const resetFn = () => {
  bill_amt.value = "";
  custom_per.value = "";
  people.value = "";
  fn_tip_amt.innerHTML = "$0.00";
  fn_total.innerHTML = "$0.00";
  button.forEach((btn) => {
    btn.classList.remove("clicked_button");
  });
  reset.disabled = true;
};
button.forEach((item) => {
  item.addEventListener("click", () => {
    calcbuttonClick(item);
  });
});

custom_per.addEventListener("input", customInputPercentage);

bill_amt.addEventListener("input", () => {
  bill_amt.classList.add("cool");
  amt_lb.classList.add("other-one");
});

people.addEventListener("input", () => {
  people.classList.add("cool");
  zero_lb.classList.add("other-one");
});
reset.disabled = true;
reset.addEventListener("click", resetFn);

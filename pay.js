// UI var for form
const calc_form = document.getElementById("calc-form");

// Function called after 'calculate' button on form clicked (it decides which calculate function is used, depending on pay frequency given)
function calcResults(e) {
  e.preventDefault();
  //UI variables for wages, hours and frequency
  const wage = document.getElementById("wage").value;
  const hours = document.getElementById("hours").value;
  var e = document.getElementById("frequency");
  var freq = e.value; // user chooses pay frequency which is passed into switch

  switch (freq) {
    case "year":
      calcYearly(wage, hours); // pass these UI vars to function which populates results
      document.getElementById("pay-results").style.display = "block"; // display section that shows results
      break;

    case "month":
      calcMonthly(wage, hours);
      document.getElementById("pay-results").style.display = "block";
      break;

    case "week":
      calcWeekly(wage, hours);
      document.getElementById("pay-results").style.display = "block";
      break;

    case "hour":
      calcHourly(wage, hours);
      document.getElementById("pay-results").style.display = "block";
      break;

    default:
  }
}

// Event listener on form after user clicks 'Calculate' button
calc_form.addEventListener("submit", calcResults);

// Four calculation options in functions below,  depending on what user enters the remaining 3 will be calulated (the ones they don't know)
function calcYearly(wage, hours) {
  const monthly_wage = wage / 12;
  const weekly_wage = wage / 52;
  const hourly_wage = wage / 52 / hours;

  first.value = monthly_wage.toFixed(2); // first input populated
  second.value = weekly_wage.toFixed(2); // second input populated
  third.value = hourly_wage.toFixed(2); // third input populated
}

function calcMonthly(wage, hours) {
  const yearly_wage = wage * 12;
  const weekly_wage = yearly_wage / 52;
  const hourly_wage = wage / 52 / hours;

  first.value = yearly_wage.toFixed(2);
  second.value = weekly_wage.toFixed(2);
  third.value = hourly_wage.toFixed(2);
}

function calcWeekly(wage, hours) {
  const yearly_wage = wage * 52;
  const monthly_wage = yearly_wage / 12;
  const hourly_wage = wage / hours;

  first.value = yearly_wage.toFixed(2);
  second.value = monthly_wage.toFixed(2);
  third.value = hourly_wage.toFixed(2);
}

function calcHourly(wage, hours) {
  const yearly_wage = wage * hours * 52;
  const monthly_wage = (wage * hours * 52) / 12;
  const weekly_wage = wage / hours;

  first.value = yearly_wage.toFixed(2);
  second.value = monthly_wage.toFixed(2);
  third.value = weekly_wage.toFixed(2);
}

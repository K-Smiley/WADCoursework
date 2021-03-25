// ---------- pay.html ----------
const calc_form = document.getElementById("calc-form");

function calcResults(e) {
  e.preventDefault();
  //UI variables
  const wage = document.getElementById("wage").value;
  const hours = document.getElementById("hours").value;

  var e = document.getElementById("frequency");
  var freq = e.value;

  switch (freq) {
    case "year":
      calcYearly(wage, hours);
      document.getElementById("results").style.display = "block";
      break;

    case "month":
      calcMonthly(wage, hours);
      document.getElementById("results").style.display = "block";
      break;

    case "week":
      calcWeekly(wage, hours);
      document.getElementById("results").style.display = "block";
      break;

    case "hour":
      calcHourly(wage, hours);
      document.getElementById("results").style.display = "block";
      break;

    default:
    // code block
  }
}

// listen for submit
calc_form.addEventListener("submit", calcResults);

function calcYearly(wage, hours) {
  const monthly_wage = wage / 12;
  const weekly_wage = wage / 52;
  const hourly_wage = wage / 52 / hours;

  first.value = monthly_wage.toFixed(2);
  second.value = weekly_wage.toFixed(2);
  third.value = hourly_wage.toFixed(2);
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

// ---------- jobinfo.html ----------

let base_url = "http://api.lmiforall.org.uk/api/v1/soc/search/ ";

const jobinfo_form = document.getElementById("jobinfo-form");
jobinfo_form.addEventListener("submit", function (e) {
  console.log("test");
  e.preventDefault();
  //   let jobtitle = document.getElementById("jobtitle").value;
  //   console.log(jobtitle.value);
  //   // to do - sanitise input
  //   let url_query = base_url + jobtitle;

  //   fetch(url_query)
  //     .then((response) => response.json())
  //     .then((json_response) => {
  //       console.log(json_response.result);
  //     });
});

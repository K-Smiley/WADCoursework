const jobinfo_form = document.getElementById("jobinfo-form");
let base_url = "http://api.lmiforall.org.uk/api/v1/soc/search?q=";
let job_url = "http://api.lmiforall.org.uk/api/v1/soc/code/";
let pay_url = "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=";
let payInfo;

jobinfo_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let soc = document.getElementById("job").value;

  let url_1 = job_url + soc;
  let url_2 = pay_url + soc;
  e.preventDefault();

  fetch(url_1)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })

    .then((data) => {
      displayInfo(data);
    });

  fetch(url_2)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })

    .then((data) => {
      displayPay(data);
    });
});

// First event listener fires after user finishes typing general job title to search with
jobtitle.addEventListener("keyup", function (e) {
  let jobtitle = document.getElementById("jobtitle").value;
  let url = base_url + jobtitle;
  e.preventDefault();

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      displayOptions(data);
    });
});

// Function to show a list of jobs (returned from first search) in dropdown list for user to choose from
function displayOptions(data) {
  // UI variables
  let dropdown = document.getElementById("job");
  dropdown.length = 0;
  let defaultOption = document.createElement("option");
  defaultOption.text = "Choose from below";
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  let option;
  for (let i = 0; i < data.length; i++) {
    option = document.createElement("option");
    option.text = data[i].title;
    option.value = data[i].soc;
    dropdown.add(option);
  }
}

function displayInfo(data) {
  document.getElementById("results").style.display = "block";
  description.value = data.description;
  qualifications.value = data.qualifications;
  tasks.value = data.tasks;
}

function displayPay(data) {
  document.getElementById("pay-results").style.display = "block";
  let weekly_pay = data.series[0].estpay;
  let salary = calcSalary(weekly_pay);
  document.getElementById("payInfo").innerHTML = salary;
}

function calcSalary(weekly_pay) {
  let salary = weekly_pay * 52;
  return salary;
}

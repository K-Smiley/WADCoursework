// UI var for form
const jobinfo_form = document.getElementById("jobinfo-form");

// URLs for API calls
let base_url = "http://api.lmiforall.org.uk/api/v1/soc/search?q=";
let job_url = "http://api.lmiforall.org.uk/api/v1/soc/code/";
let pay_url = "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=";
let payInfo;

// Event listener on form submit
jobinfo_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let soc = document.getElementById("job").value; // user has selected a job and it's value is soc code

  let url_1 = job_url + soc; // add soc code to URL for specific job info
  let url_2 = pay_url + soc; // add soc code to URL for pay info
  e.preventDefault();

  // Second API call to get specific job info
  fetch(url_1)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      displayInfo(data); // Pass this data to display function
    });

  // Third API call to get salary info
  fetch(url_2)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      displayPay(data); // Pass this data to display function
    });
});

// First event listener fires after user finishes typing general job title to search
jobtitle.addEventListener("keyup", function (e) {
  let jobtitle = document.getElementById("jobtitle").value; // UI var from first input
  let url = base_url + jobtitle; // concat first URL with job title
  e.preventDefault();

  // First API call to get matching list of jobs
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      displayOptions(data); // pass list to function
    });
});

// Function takes list of jobs and displays in drop down option
function displayOptions(data) {
  // UI variables
  let dropdown = document.getElementById("job");
  dropdown.length = 0;
  let defaultOption = document.createElement("option");
  defaultOption.text = "Choose from below";
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  // loop through first 10 jobs in list
  let option;
  for (let i = 0; i < 11; i++) {
    option = document.createElement("option"); // create option element
    option.text = data[i].title; // display job's title in option element
    option.value = data[i].soc; // add job's soc code to option element
    dropdown.add(option); // add option element to dropdown
  }
}

// Function to display job info after user selects one from dropdown list
function displayInfo(data) {
  document.getElementById("job-results").style.display = "block"; // show hidden part of form
  description.value = data.description; // populate description
  qualifications.value = data.qualifications; // populate qualifications
  tasks.value = data.tasks; // populate tasks
}

// Function to display job's salary
function displayPay(data) {
  document.getElementById("job-pay").style.display = "block"; // show hidden section
  let weekly_pay = data.series[0].estpay; // get first item in array which shows weekly pay
  let salary = calcSalary(weekly_pay); // pass this to function to calulate annual pay
  document.getElementById("salary").value = salary; // populate salary
}

// Function to calculate salary, returned to displayPay function
function calcSalary(weekly_pay) {
  let salary = weekly_pay * 52;
  return salary;
}

let base_url = "http://api.lmiforall.org.uk/api/v1/soc/search/?q";

const jobinfo_form = document.getElementById("jobinfo-form");

jobinfo_form.addEventListener("submit", function (e) {
  console.log("test");
  e.preventDefault();

  let jobtitle = document.getElementById("jobtitle").value;
  console.log(jobtitle);
  // to do - sanitise input
  let url_query = base_url + jobtitle;

  fetch(url_query)
    .then((response) => response.json())
    .then((json_response) => {
      console.log(json_response.result);
    });
});

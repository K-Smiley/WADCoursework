const jobinfo_form = document.getElementById("jobinfo-form");

jobinfo_form.addEventListener("submit", function (e) {
  const base_url = "http://api.lmiforall.org.uk/api/v1/soc/search?q=";
  const jobtitle = document.getElementById("jobtitle").value;
  const url = base_url + jobtitle;

  console.log(jobtitle);
  e.preventDefault();

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        console.log(item);
      });
    });
});

//   //   let jobtitle = document.getElementById("jobtitle").value;
//   //   console.log(jobtitle);
//   //   // to do - sanitise input
//   //   let url_query = base_url + jobtitle;

// fetch(base_url)
//   //     .then((response) => response.json())
//   //     .then((json_response) => {
//   //       console.log(json_response);
//   //       console.log(json_response.result);
//   //     });
//   // });

//   fetch(base_url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json(); // returns the response as a json
//       }
//     })
//     .then((response) => {
//       if (response === undefined) {
//         alert("Something went wrong");
//       } else {
//         console.log(response);
//       }
//     });
// })

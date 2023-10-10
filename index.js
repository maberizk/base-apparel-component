const input = document.querySelector("input");

function validateForm() {
  if (input.value === "") {
    alert("Please fill out form");
    console.log(input.value);
  } else {
    alert("Email submitted");
  }
}

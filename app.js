function validateForm() {
  var x = document.forms["validationform"]["inputbox"].value;
  var nameformat = /^[a-zA-Z\s]*$/;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var phoneformat = /^[0-9]{8}$/;
  var idformat = /^[0-9]*$/;
  var radiosearches = document.getElementsByName("radiosearch");
  if (x == "") {
    alert("Input box can not be empty");
    return false;
  }
  if (radiosearches[0].checked == true) {
    if (!x.match(idformat)) {
      alert("Enter a Valid ID");
      return false;
    }
  }
  if (radiosearches[1].checked == true) {
    if (!x.match(nameformat)) {
      alert("Enter a Valid Name");
      return false;
    }
  }
  if (radiosearches[2].checked == true) {
    if (!x.match(phoneformat)) {
      alert("Enter a Valid Phone Number");
      return false;
    }
  }
  if (radiosearches[3].checked == true) {
    if (!x.match(mailformat)) {
      alert("Enter a Valid Mail");
      return false;
    }
  }

  //** String validations are here with Regex */

  //   if (!x.match(nameformat)) {
  //     alert("Enter a Valid Name");
  //     return false;
  //   }

  //   if (!x.match(mailformat)) {
  //     alert("Enter a Valid Mail");
  //     return false;
  //   }

  //   if (!x.match(phoneformat)) {
  //     alert("Enter a Valid Phone Number");
  //     return false;
  //   }

  //   if (!x.match(idformat)) {
  //     alert("Enter a Valid ID");
  //     return false;
  //   }
}

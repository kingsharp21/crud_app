// filter using search bar
export function filterServices() {
  let input, filter, contentList, list, name, i, txtValue;
  input = document.querySelector(".searchInput");
  filter = input.value.toUpperCase();
  contentList = document.querySelector(".content-list");
  list = contentList.getElementsByClassName("list");
  for (i = 0; i < list.length; i++) {
    name = list[i].getElementsByTagName("div")[0];
    txtValue = name.textContent || name.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

// validate edit and addContact form
export function validateForms(firstName, lastName, phoneNumber) {
  if (firstName === "" || lastName === "" || phoneNumber === "") {
    let res = {
      status: false,
      msg: "All input fields required *",
    };
    return res;
  } else if (firstName.length === 1 || lastName.length === 1) {
    let res = {
      status: false,
      msg: "FirstName and LastName inputs should be more than 1",
    };
    return res;
  } else if (phoneNumber.length !== 10) {
    let res = {
      status: false,
      msg: "Phone Number lenght should be 10,",
    };
    return res;
  } else {
    let res = {
      status: true,
      msg: "Contact saved, successfully",
    };
    return res;
  }
}

// function for formating phone number to this form 055-933-6468
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  if (match) {
    return match[1] + "-" + match[2] + "-" + match[3];
  }
  return null;
}

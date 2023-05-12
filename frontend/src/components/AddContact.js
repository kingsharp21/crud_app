import { useState, useContext } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

import { BaseURL } from "../config/baseURL";
import { notifyError, notifySuccess } from "../config/notificationMsg";
import { validateForms } from "../services/services";

import RootContext from "../config/RootContext";

function AddContact({ visibility, updateVisibility }) {
  const { loadData } = useContext(RootContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const valid = validateForms(form.firstName,form.lastName,form.phoneNumber);
    if (!valid.status) {
      notifyError(valid.msg);
    } else {
      axios
        .post(`${BaseURL}/store_contact`, {
          firstName: form.firstName,
          lastName: form.lastName,
          phoneNumber: form.phoneNumber,
        })
        .then((response) => {
          closeAddDialog(); // close popup
          loadData(); //refresh data
          notifySuccess(valid.msg); //notify user

          //clear form
          setForm({
            firstName: "",
            lastName: "",
            phoneNumber: "",
          });
        })
        .catch((err) => {
          notifyError("Sorry, Something went wrong. Please try again");
        });
    }
  }

  // function validateForms() {
  //   if (
  //     form.firstName === "" ||
  //     form.lastName === "" ||
  //     form.phoneNumber === ""
  //   ) {
  //     let res = {
  //       status: false,
  //       msg: "All input fields required *",
  //     };
  //     return res;
  //   } else if (form.firstName.length === 1 || !form.lastName.length === 1) {
  //     let res = {
  //       status: false,
  //       msg: "FirstName and LastName inputs should be more than 1",
  //     };
  //     return res;
  //   } else if (form.phoneNumber.length !== 10) {
  //     let res = {
  //       status: false,
  //       msg: "Phone Number lenght should be 10,",
  //     };
  //     return res;
  //   } else {
  //     let res = {
  //       status: true,
  //       msg: "Contact saved, successfully",
  //     };
  //     return res;
  //   }
  // }

  function closeAddDialog() {
    updateVisibility("hidden");
  }
  return (
    <section className={`add-form ${visibility}`}>
      <div className="col-sm-6 col-md-4 col-5">
        <div className="card mb-4">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Add Contact</h5>
            <CloseIcon
              style={{ fontSize: 28, cursor: "pointer" }}
              onClick={closeAddDialog}
              titleAccess="close"
            />
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label
                  className="col-sm-3 col-form-label"
                  htmlFor="basic-default-name"
                >
                  First Name <span className="required">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Kingsharp"
                    value={form.firstName}
                    onChange={handleChange}
                    // required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-3 col-form-label"
                  htmlFor="basic-default-company"
                >
                  Last Name <span className="required">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Nkansah"
                    value={form.lastName}
                    onChange={handleChange}
                    // required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  className="col-sm-3 col-form-label"
                  htmlFor="basic-default-phone"
                >
                  Phone No <span className="required">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    id="phoneNumber"
                    className="form-control phone-mask"
                    placeholder="0559336468"
                    value={form.phoneNumber}
                    min="0"
                    onChange={handleChange}
                    // required
                  />
                </div>
              </div>

              <div className="row justify-content-end">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddContact;

import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import Contacts from "./components/contacts/Contacts";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
function App() {
  const notify = () => toast("Wow so easy!");

  const [show, setShow] = useState('hidden')

  function filterContant() {
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


  function displayAddDialog() {
    setShow('visible')
  }

  function closeAddDialog() {
    setShow('hidden')
  }

  function saveNewNumber() {
    
  }

  function editNumber() {
    
  }


  return (
    <div className="App">
      <ToastContainer />
      <header>
        <div className="wrapper">
          <h1>Phone Book App</h1>
        </div>
      </header>
      <section className="add-section">
        <div className="wrapper">
          <p>Contacts</p>
          <button onClick={displayAddDialog} className="btn btn-primary"><AddIcon/> Add Contact</button>
        </div>
      </section>

      <div className="contents wrapper">
        <input
          className="searchInput form-control"
          onChange={filterContant}
          type="text"
          placeholder="Search for content by last name..."
        />
        <div className="content-list">
         
          <Contacts firstname='Offei' lastname='Boafo' number='0559336468'/>

          <div className="list">
            <div className="number">
              <p>Offei Boafo</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                0559336468
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>

          <div className="list">
            <div className="number">
              <p>Zeddicus</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                0559336468
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>

          <div className="list">
            <div className="number">
              <p>Bill Gates</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                0559336468
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>

          <div className="list">
            <div className="number">
              <p>Victory Asamoah</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                0245705707
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>

          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>
                {" "}
                <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                0559336468
              </span>
            </div>
            <DeleteForeverIcon
              style={{ fill: "red", fontSize: 28, cursor: "pointer" }}
            titleAccess="delete"/>
          </div>
        </div>
      </div>

      <section className={`add-form ${show}`}>
        <div className="col-5">
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Add Contact</h5>
              <CloseIcon style={{ fontSize: 28, cursor: "pointer" }} onClick={closeAddDialog} titleAccess="close"/>

            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    for="basic-default-name"
                  >
                    First Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-default-name"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    for="basic-default-company"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-default-company"
                      placeholder="ACME Inc."
                    />
                  </div>
                </div>
              
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    for="basic-default-phone"
                  >
                    Phone No
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="basic-default-phone"
                      className="form-control phone-mask"
                      placeholder="658 799 8941"
                      aria-label="658 799 8941"
                      aria-describedby="basic-default-phone"
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
    </div>
  );
}

export default App;

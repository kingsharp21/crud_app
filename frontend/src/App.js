import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootContext from "./config/RootContext";

// imported icons from material UI
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddIcon from "@mui/icons-material/Add";

// imported function and variables from universal config and sevices folders
import { filterServices } from "./services/services";
import { BaseURL } from "./config/baseURL";
import { notifyError } from "./config/notificationMsg";

// imported app features/components from components folder
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

import "./App.css";
function App() {
  const [show, setShow] = useState("hidden");
  const [isLoading, setLoading] = useState(true);
  const [allData, setAllData] = useState(null);

  // show addContact dialog
  function displayAddDialog() {
    setShow("visible");
  }

  // fetch all data
  function loadData() {
    axios.get(`${BaseURL}/get_all_contacts`)
    .then((response) => {
      setAllData(response.data["data"]);
      setLoading(false);
    }).catch((error) => {
      notifyError("Sorry, Something went wrong. Try refreshing the page to load contacts")
    });
  }

  // delete data
  function deleteData(contact_id) {
    axios
      .delete(`${BaseURL}/delete_contact`, {
        data: { id: contact_id },
      })
      .then((response) => {
        if (response.data.status === "deleted") {
          loadData(); // refresh contact
          notifyError("Contact deleted"); //notify user
        }       
      }).catch((error) => {
        notifyError("Sorry, Something went wrong. Please try again")
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <RootContext.Provider value={{ loadData }}>
      <div className="App">
        <ToastContainer />
        <header>
          <div className="wrapper">
            <h1>
              <AutoStoriesIcon
                style={{
                  fill: "black",
                  fontSize: 55,
                  cursor: "pointer",
                  margin: "0 10",
                }}
              />{" "}
              Phone Book App
            </h1>
          </div>
        </header>
        <section className="add-section">
          <div className="wrapper">
            <p>Contacts</p>
            <button onClick={displayAddDialog} className="btn btn-primary">
              <AddIcon /> Add Contact
            </button>
          </div>
        </section>

        <div className="contents wrapper">
          <input
            className="searchInput form-control"
            onChange={filterServices}
            type="text"
            placeholder="Search for content by last name..."
          />
          <div className="content-list">
            {isLoading ? (
              <div className="App">
                <div className="center-body">
                  <div className="loader-circle-6"></div>
                </div>
              </div>
            ) : (
              allData.map((data,index) => {
                return (
                  <Contacts
                    key={index}
                    id={data.id}
                    firstName={data.firstName}
                    lastName={data.lastName}
                    phoneNumber={data.phoneNumber}
                    deleteData={deleteData}
                  />
                );
              })
            )}
          </div>
        </div>

        <AddContact
          visibility={show}
          updateVisibility={setShow}
        />
      </div>
    </RootContext.Provider>
  );
}

export default App;

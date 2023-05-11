import React, { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootContext from "./config/RootContext";

import { filterServices } from "./services/services";
import { BaseURL } from "./config/baseURL";
import { notifyError } from "./config/notificationMsg";

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
    axios.get(`${BaseURL}/get_all_contacts`).then((response) => {
      setAllData(response.data["data"]);
      setLoading(false);
    });
  }

  // delete data
  function deleteData(contact_id) {
    axios
      .delete(`${BaseURL}/delete_contact`, {
        data: { id: contact_id },
      })
      .then((response) => {
        loadData();
        notifyError("Contact deleted");
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
              allData.map((data) => {
                return (
                  <Contacts
                    key={data.id}
                    id={data.id}
                    firstName={data.firstName}
                    lastName={data.lastName}
                    phoneNumber={data.phoneNumber}
                    deleteData={deleteData}
                    // refresh={getData}
                  />
                );
              })
            )}
          </div>
        </div>

        <AddContact
          visibility={show}
          updateVisibility={setShow}
          // refresh={getData}
        />
      </div>
    </RootContext.Provider>
  );
}

export default App;

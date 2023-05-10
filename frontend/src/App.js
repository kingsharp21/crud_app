import React, { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { filterServices } from "./services/services";

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
  function getData() {
    const baseURL = "http://127.0.0.1:8000/api";
    axios.get(`${baseURL}/get_all_contacts`).then((response) => {
      setAllData(response.data["data"]);
      setLoading(false);
    });
  }

  // delete data
  function deleteData(contact_id) {
    const baseURL = "http://127.0.0.1:8000/api";
    axios
      .delete(`${baseURL}/delete_contact`, {
        data: { id: contact_id },
      })
      .then((response) => {
        getData();
        toast.error("Contact deleted");
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
              <div class="center-body">
                <div class="loader-circle-6"></div>
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
                  deleteData = {deleteData}
                  getData={getData}
                />
                // <div key={data.id} className="list">
                //   <div className="number">
                //     <p>{`${data.firstName} ${data.lastName}`}</p>
                //     <span>
                //       {" "}
                //       <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                //       {data.phoneNumber}
                //     </span>
                //   </div>
                //   <div className="tools">
                //     <EditIcon
                //       style={{ fill: "black", fontSize: 25, cursor: "pointer", margin: '0 10' }}
                //       titleAccess="Edit"/>
                //     <DeleteForeverIcon
                //       onClick={() => deleteData(data.id)}
                //       style={{ fill: "red", fontSize: 25, cursor: "pointer", margin:'0 10'  }}
                //       titleAccess="Delete" />
                //   </div>

                // </div>
              );
            })
          )}
        </div>
      </div>

      <AddContact
        visibility={show}
        updateVisibility={setShow}
        getData={getData}
      />
    </div>
  );
}

export default App;

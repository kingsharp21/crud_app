import { useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EditIcon from '@mui/icons-material/Edit';

import { baseURL } from "../config/baseURL";
import { notifyError, notifySuccess } from "../config/notificationMsg"

const Contacts = ({ id, firstName, lastName, phoneNumber, deleteData, refresh }) => {
  const [edit, setEdit] = useState(false);

  const needEdit = () => {setEdit(true);};


  const [form, setForm] = useState({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber ,
  });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };



    const handleEdit = (event) => {
        event.preventDefault();
        axios
            .patch(`${baseURL}/edit_contact`,{ 
                id: id,
                firstName: form.firstName,
                lastName: form.lastName,
                phoneNumber: `${form.phoneNumber}`
                })
            .then((response) => {
                if (response.data.status === "updated") {       
                    setEdit(false)
                    refresh()
                    notifySuccess("Contact updated successfully!!");
                }             
            }).catch((err)=>{
              notifyError('Faild to save contact! Tips:number lenght should be below 12 digits')
            });
    };


  return (
    <>
      {edit === true ? (
              <form className="list" onSubmit={handleEdit}>
          <div className="edit">
            <div className="fileds">
              <input
                id="firstName"
                className="form-control"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                id="lastName"
                className="form-control"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              <input
                id="phoneNumber"
                className="form-control"
                type="number"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="list">
          <div className="number">
            <p>{`${firstName} ${lastName}`}</p>
            <span>
              {" "}
              <LocalPhoneIcon style={{ fill: "grey", fontSize: 18 }} />{" "}
                {phoneNumber}
            </span>
          </div>
          <div className="tools">
            <EditIcon
              style={{
                fill: "black",
                fontSize: 25,
                cursor: "pointer",
                margin: "0 10",
              }}
              titleAccess="Edit"
              onClick={needEdit}
            />
            <DeleteForeverIcon
              onClick={() => deleteData(id)}
              className="delect-icon"
              style={{
                fill: "white",
                background: "#D2042D",
                borderRadius: 3,
                padding:4,
                fontSize: 30,
                cursor: "pointer",
                margin: "0 10",

              }}
              titleAccess="Delete"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Contacts;

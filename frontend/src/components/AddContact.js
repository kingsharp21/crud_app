import { useState, useRef } from "react";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { toast } from "react-toastify";


function AddContact({ visibility, updateVisibility, getData }) {
    const btn = useRef()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const baseURL = 'http://127.0.0.1:8000/api'

        if (form.firstName == '' || form.lastName == '' || form.phoneNumber == '') {
            toast.warning('All fields are required !!')
        }else{
            axios
                .post(`${baseURL}/store_contact`, {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    phoneNumber: form.phoneNumber
                })
                .then((response) => {
                    closeAddDialog() // close popup
                    getData() //refresh data
                    toast.success('Contact saved, successfully') //notify user

                    //clear form
                    setForm({
                        firstName: '',
                        lastName: '',
                        phoneNumber: ''
                    })

                }).catch((err)=>{
                    toast.error('Faild to save contact! Tips:number lenght should be below 12 digits')
                });
           
        }

       
    };


    function closeAddDialog() {
        updateVisibility('hidden')
    }
    return (
        <section className={`add-form ${visibility}`}>
            <div className="col-sm-6 col-md-6 col-5">
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Add Contact</h5>
                        <CloseIcon style={{ fontSize: 28, cursor: "pointer" }} onClick={closeAddDialog} titleAccess="close" />

                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label
                                    className="col-sm-2 col-form-label"
                                    htmlFor="basic-default-name"
                                >
                                    First Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="kingsharp"
                                        value={form.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                    className="col-sm-2 col-form-label"
                                    htmlFor="basic-default-company"
                                >
                                    Last Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Nkansah"
                                        value={form.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    className="col-sm-2 col-form-label"
                                    htmlFor="basic-default-phone"
                                >
                                    Phone No
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        id="phoneNumber"
                                        className="form-control phone-mask"
                                        placeholder="055 933 6468"
                                        value={form.phoneNumber}
                                        onChange={handleChange}
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
import React, { useState } from 'react';
import './AddService.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import uploadIcon from '../../../images/icons/upload.png';
import { useHistory } from 'react-router-dom';

const AddService = () => {
    const history = useHistory();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const handleChange = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    console.log(info, file);


    return (
        <div className="addService  container-fluid pr-0 "> 
            <div className="addService row pt-4">
            <div className="col-md-3">
                <Sidebar />
            </div>

            <div className="col-md-9">
            
                <div className="header-option ml-5">
                    <h3> Add Service </h3>
                </div>
                <div className="rightOption ">

                    {/* {
                event.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : event.success = ""
            } */}

                    <form onSubmit={handleSubmit} className=" " action="" >
                        <div className="form">
                        <div className="formLeft">
                            <h5>Event Title </h5>
                            <input type="text" name="title"
                                placeholder="Enter title" id=""
                                onChange={handleChange}
                            />

                            <h5> Description </h5>
                            <textarea  type="text-area" name="description"
                                placeholder="Enter Description " id=""
                                onChange={handleChange}
                                rows="4" cols="28"
                            />
                        </div>

                        <div className="formRight">
                            <h5> Icon </h5>
                            <div className="uploadFile">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="custom-file-input"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <div id="uploadImageText"> <img className='uploadIcon' src={uploadIcon} alt="" /> Upload image </div>
                            </div>
                        </div>
                        </div>

                        <div className="ml-auto mr-5" style={{width: " 140px", }}>
                           <input
                                    className="submit-button "
                                    type="submit"
                                    value="Submit"

                                />
                        </div>

                    </form>

                </div>
            
            </div>
            

        </div>
        </div>
    );
};

export default AddService;
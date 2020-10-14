import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar/Sidebar';

const AddService = () => {




    const history = useHistory();

    const [event, setEvent] = useState({
        name: '',
        description: '',
        date: '',
        success: '',
        pic:'riverClean',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const newEventInfo = { ...event };
        newEventInfo[e.target.name] = e.target.value;
        setEvent(newEventInfo);
    };

  

    const handleEvent = (e) => {
        e.preventDefault();
        const eventInfo = { ...event, ...selectedFile };
        fetch('https://secret-wildwood-13220.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(data => {
                event.success = "Registration Successful"
                setEvent(eventInfo);
                history.push('/')
            })
    }





    return (
        <div className="addService d-flex pt-4">
            <Sidebar/>
            <div className="right-side">
            <div className="header-option ">
                <h3> Add Service </h3>
            </div>
            <div className="rightOption">
            
             {/* {
                event.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : event.success = ""
            } */}

            <form onSubmit={handleEvent} className="form " action="" enctype="multipart/form-data">
                <div className="formLeft">
                    <h5>Event Title </h5>
                    <input type="text" name="name"
                    
                        placeholder="Enter title" id=""
                        onChange={handleChange}
                    />

                    <h5> Description </h5>
                    <input type="text" name="description"
                        placeholder="Enter Description " id=""
                        onChange={handleChange}
                        style={{ paddingBottom: " 70px", paddingTop: "15px" }}
                    />
                </div>

                <div className="formRight">
                    <h5>Event Date </h5>
                    <input type="date" name="date"
                        placeholder="Enter title" id=""
                        onChange={handleChange}
                        style={{color: "#C9C9C9"}}
                    />


                    <h5> Banner </h5>
                    <div className="uploadFile">
                        <input
                            type="file"
                            accept="image/*"
                            className="custom-file-input"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        {/* <div id="uploadImageText"> <img className='uploadImage' src={uploadIcon} alt="" /> Upload image </div> */}
                    </div>

                    <input
                        style={{
                            background: "#3F90FC",
                            height: "35px",
                            color: "white",
                            marginTop: "20px",
                            paddingBottom: "5px",
                            fontSize: "1.2rem",
                            borderRadius: "5px",
                        }}
                        type="submit"
                        value="Submit"
                        
                    />

                </div>

            </form>
        
            </div>
            </div>
        </div>
    );
};

export default AddService;
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios, { AxiosResponse } from 'axios';
import moment from 'moment';

function App() {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const axios = require('axios');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://localhost:6060/timezone/' + latitude + '/' + longitude).then((repos) => {
            const timezone = repos.data;
            console.log(JSON.stringify(timezone));
            console.log(JSON.stringify(timezone.message));
            const m = moment(new Date(timezone.message.formatted));
            console.log(JSON.stringify(m.format('h:mma')));
            alert('Local time=' + m.format('h:mma'));
        });

    }

    return (
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="latitude">
                        <label>Latitude</label>
                        <input type="text" placeholder="Enter latitude"  value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
            
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="longitude">
                        <label>longitude</label>
                        <input type="text" placeholder="Enter longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
                    </Form.Group>
            
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
            );
}

export default App;

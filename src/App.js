import React from "react";
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function App() {
    const connectSocket = () => {
        io('http://localhost:8080');
    }

    return (
        <div className="wrapper">
            <div className="join-block">
                <input
                    type="text"
                    placeholder="Room ID"
                />
                <input
                    type="text"
                    placeholder="Введите имя"
                />
                <Button variant="primary">
                    ТЫК
                </Button>
            </div>
        </div>
    );
}

export default App;
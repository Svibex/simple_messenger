import React from "react";
import io from 'socket.io-client';

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
                <button>
                    ТЫК
                </button>
            </div>
        </div>
    );
}

export default App;
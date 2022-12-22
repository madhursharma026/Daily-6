const moment = require("moment");
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    const [currentTimer, setCurrentTimer] = useState("")

    let todayDate = moment().format("DD-MM-YYYY");

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTimer(time)
    }
    setInterval(UpdateTime, 1000)

    return (
        <>
            <h1 className="text-center pt-2 pb-3"><u>Daily 6</u></h1>
            <div className="row">
                <div className="col-6"><h6>Date: {todayDate}</h6></div>
                <div className="col-6" style={{ textAlign: "right" }}><h6>Time: {currentTimer}</h6></div>
            </div>
            </>
    )
}


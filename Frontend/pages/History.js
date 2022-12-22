const moment = require("moment")
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/History.module.css';
import Header from './components/Header';

export default function History() {

    const [myTaskCompleted, setMyTaskCompleted] = useState([])
    const [currentTimer, setCurrentTimer] = useState("")

    let todayDate = moment().format("DD-MM-YYYY");

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTimer(time)
    }
    setInterval(UpdateTime, 1000)

    function callDateWiseTasks(date) {
        let selectedDate = date
        if (selectedDate === undefined) {
            selectedDate = moment().format("YYYY-MM-DD");
            fetch(`http://localhost:3000/task-detail/${selectedDate}`).then((result) => {
                result.json().then((resp) => {
                    if (resp.length === 0) {
                        setMyTaskCompleted({
                            "task1": "Not Done",
                            "task2": "Not Done",
                            "task3": "Not Done",
                            "task4": "Not Done",
                            "task5": "Not Done",
                            "task6": "Not Done",
                            "completedAt": `${selectedDate}`
                        })
                    } else {
                        setMyTaskCompleted(resp[0])
                    }
                })
            })
        } else {
            fetch(`http://localhost:3000/task-detail/${date}`).then((result) => {
                result.json().then((resp) => {
                    if (resp.length === 0) {
                        setMyTaskCompleted({
                            "task1": "Not Done",
                            "task2": "Not Done",
                            "task3": "Not Done",
                            "task4": "Not Done",
                            "task5": "Not Done",
                            "task6": "Not Done",
                            "completedAt": `${date}`
                        })
                    } else {
                        setMyTaskCompleted(resp[0])
                    }
                })
            })
        }
    }

    useEffect(() => {
        callDateWiseTasks()
    }, [])

    return (
        <div className={`container-md ${styles.making_mobile_size_scrn} ${styles.side_scrollbox_start}`}>
            {/* <h1 className="text-center pt-2 pb-3"><u>Daily 6</u></h1>
            <div className="row">
                <div className="col-6"><h6>Date: {todayDate}</h6></div>
                <div className="col-6" style={{ textAlign: "right" }}><h6>Time: {currentTimer}</h6></div>
            </div> */}
            {/* <h4 className="text-center pt-3">My Daily Tasks</h4> */}
            <Header />
            <h5 className='text-center pt-4'>Select Date: <input type="date" onChange={(e) => callDateWiseTasks(e.target.value)} /></h5>
            <h5 className="text-center pt-3"><u>History</u></h5>
            <ul class="list-group">
                <li class="list-group-item">Task 1: {(myTaskCompleted.task1 === "") ? "Not Done" : myTaskCompleted.task1}</li>
                <li class="list-group-item">Task 2: {(myTaskCompleted.task2 === "") ? "Not Done" : myTaskCompleted.task2}</li>
                <li class="list-group-item">Task 3: {(myTaskCompleted.task3 === "") ? "Not Done" : myTaskCompleted.task3}</li>
                <li class="list-group-item">Task 4: {(myTaskCompleted.task4 === "") ? "Not Done" : myTaskCompleted.task4}</li>
                <li class="list-group-item">Task 5: {(myTaskCompleted.task5 === "") ? "Not Done" : myTaskCompleted.task5}</li>
                <li class="list-group-item">Task 6: {(myTaskCompleted.task6 === "") ? "Not Done" : myTaskCompleted.task6}</li>
            </ul>
            <Footer />
        </div>
    )
}

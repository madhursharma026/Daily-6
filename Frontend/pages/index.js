const moment = require("moment")
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Header from './components/Header';

export default function Home() {

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [currentTimer, setCurrentTimer] = useState("")
  const [alertMessageBg, setAlertMessageBg] = useState("")
  const [myTaskCompleted, setMyTaskCompleted] = useState([])

  let todayDate = moment().format("DD-MM-YYYY");

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTimer(time)
  }
  setInterval(UpdateTime, 1000)

  function callAllTasks() {
    fetch(`http://localhost:3000/task-detail/`).then((result) => {
      result.json().then((resp) => {
        if (resp.length === 0) {
          setMyTaskCompleted({
            "task1": "",
            "task2": "",
            "task3": "",
            "task4": "",
            "task5": "",
            "task6": "",
            "completedAt": ""
          })
        } else {
          setMyTaskCompleted(resp[0])
        }
      })
    })
  }

  useEffect(() => {
    callAllTasks()
  }, [])


  async function taskOneFunction(e) {
    let taskOneValue = ""
    if (e.target.checked === true) {
      taskOneValue = "Done"
    } else {
      taskOneValue = "Not Done"
    }
    let data = { "task1": taskOneValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask1", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task1 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 1 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task1 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 1 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  async function taskTwoFunction(e) {
    let taskTwoValue = ""
    if (e.target.checked === true) {
      taskTwoValue = "Done"
    } else {
      taskTwoValue = "Not Done"
    }
    let data = { "task2": taskTwoValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask2", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task2 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 2 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task2 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 2 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  async function taskThreeFunction(e) {
    let taskThreeValue = ""
    if (e.target.checked === true) {
      taskThreeValue = "Done"
    } else {
      taskThreeValue = "Not Done"
    }
    let data = { "task3": taskThreeValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask3", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task3 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 3 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task3 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 3 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  async function taskFourFunction(e) {
    let taskFourValue = ""
    if (e.target.checked === true) {
      taskFourValue = "Done"
    } else {
      taskFourValue = "Not Done"
    }
    let data = { "task4": taskFourValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask4", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task4 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 4 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task4 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 4 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  async function taskFiveFunction(e) {
    let taskFiveValue = ""
    if (e.target.checked === true) {
      taskFiveValue = "Done"
    } else {
      taskFiveValue = "Not Done"
    }
    let data = { "task5": taskFiveValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask5", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task5 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 5 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task5 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 5 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  async function taskSixFunction(e) {
    let taskSixValue = ""
    if (e.target.checked === true) {
      taskSixValue = "Done"
    } else {
      taskSixValue = "Not Done"
    }
    let data = { "task6": taskSixValue }
    let result = await fetch("http://localhost:3000/task-detail/addTask6", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    if (result.task6 === "Done") {
      setShowAlert(true)
      setAlertMessage("Task 6 Done!")
      setAlertMessageBg("success")
      callAllTasks()
    } else if (result.task6 === "Not Done") {
      setShowAlert(true)
      setAlertMessage("Task 6 Removed!")
      setAlertMessageBg("success")
      callAllTasks()
    } else {
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  return (
    <>
      <div className={`container-md ${styles.making_mobile_size_scrn} ${styles.side_scrollbox_start}`}>
        {
          (showAlert === true) ?
            <div class={`alert alert-dismissible alert-${alertMessageBg}`}>
              <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={() => setShowAlert(false)}></button>
              {alertMessage}
            </div>
            :
            <></>
        }
        {/* <h1 className="text-center pt-2 pb-3"><u>Daily 6</u></h1>
        <div className="row">
          <div className="col-6"><h6>Date: {todayDate}</h6></div>
          <div className="col-6" style={{ textAlign: "right" }}><h6>Time: {currentTimer}</h6></div>
        </div> */}
        <Header />
        <h4 className="text-center pt-3">My Daily Tasks</h4>
        <ul class="list-group">
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task1" onClick={(e) => taskOneFunction(e)} checked={(myTaskCompleted.task1 === "Done") ? true : false} />&ensp;
            <label for="task1">This is my task 1</label>
          </li>
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task2" onClick={(e) => taskTwoFunction(e)} checked={(myTaskCompleted.task2 === "Done") ? true : false} />&ensp;
            <label for="task2">This is my task 2</label>
          </li>
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task3" onClick={(e) => taskThreeFunction(e)} checked={(myTaskCompleted.task3 === "Done") ? true : false} />&ensp;
            <label for="task3">This is my task 3</label>
          </li>
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task4" onClick={(e) => taskFourFunction(e)} checked={(myTaskCompleted.task4 === "Done") ? true : false} />&ensp;
            <label for="task4">This is my task 4</label>
          </li>
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task5" onClick={(e) => taskFiveFunction(e)} checked={(myTaskCompleted.task5 === "Done") ? true : false} />&ensp;
            <label for="task5">This is my task 5</label>
          </li>
          <li class="list-group-item" style={{ background: '#F1F1F1' }}>
            <input type="checkbox" id="task6" onClick={(e) => taskSixFunction(e)} checked={(myTaskCompleted.task6 === "Done") ? true : false} />&ensp;
            <label for="task6">This is my task 6</label>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  )
}



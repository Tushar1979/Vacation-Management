import { useEffect, useState } from "react";

import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';

const localizer = dayjsLocalizer(dayjs)

export default function ViewLeaveCalender() {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [name, setName] = useState("");
    const [comments, setComments] = useState("");


    const leaveRecord = [{
        title: comments,
        start: start,
        end: end,
        // allDay: true,
    }]

    const viewLeaveData = async () => {
        await axios.get("http://127.0.0.1:8000/api/vacation/")
            .then((res) => {
                // setName(res.)
                console.log(res?.data)
                res?.data.map((rec) => {
                    console.log(rec?.name);
                    setName(rec?.name);
                    setStart(rec?.start_date);
                    setEnd(rec?.end_date);
                    setComments(rec?.comments);
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        viewLeaveData()
    }, [])

    let changeFormate = name.toUpperCase() 

    return (
        <div>
            <div className="cal-box">
            <span className="text-box">{changeFormate}</span>

                <Calendar
                    localizer={localizer}
                    events={leaveRecord}
                    startAccessor="start"
                    endAccessor="end"
                 
                    style={{ height: 500, marginTop: 20 }}
                />
            </div>

        </div>

    );
}
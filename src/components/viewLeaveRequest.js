import * as React from 'react';
import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = dayjsLocalizer(dayjs)

export default function ViewLeaveCalender() {


    return (
        <div>
            <div className="cal-box">
                <Calendar
                    localizer={localizer}
                    // events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    
                />
            </div>

        </div>

    );
}
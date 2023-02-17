import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ApplayForLeave from './components/requestLeave'
import ViewLeaveCalender from './components/viewLeaveRequest'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/ApplayForLeave" element={<ApplayForLeave/>}/>
        <Route path="/ViewLeaveCalender" element={<ViewLeaveCalender/>}/>
    </Routes>
  
  )
}

export default AppRoutes
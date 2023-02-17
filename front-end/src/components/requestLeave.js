import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";



function ApplayForLeave() {
    const [value, setValue] = useState([null, null])
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState();
    const [comments, setComments] = useState("");

    const employee_data = {

        name: name,
        start_date: startDate,
        end_date: endDate,
        comments: comments
    }

    const leaveData = async () => {
        await axios.post("http://127.0.0.1:8000/api/vacation/", employee_data)
            .then((res) => {
                console.log(res)
            toast.success("Successfully submited")

            })
            .catch((err) => {
                console.log(err)
                toast.warn(" All Filds are required")

            })
        clearFields()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        leaveData()
        
    }
    const clearFields = (e) => {
        setValue([null, null])
        setName("")
        setStartDate("")
        setEndDate("")
        setComments("")
    }

    useEffect(() => {
        if (value[1]) {
            const start = new Date(value[0].$d)
            const ens = new Date(value[1].$d)
            setStartDate(`${start.getFullYear()}-${start?.getMonth() + 1}-${start?.getDate()}`)
            setEndDate(`${ens.getFullYear()}-${ens?.getMonth() + 1}-${ens?.getDate()}`)
        }
    }, [value])


    return ( 
        <>
            <div className="man-box">
                <div className="text-label">
                    <span>Request for Leave</span>
                </div>
                <div className="form-box">
                    <FormControl>
                        <div className="text-input">
                            <TextField fullWidth
                                id="outlined-basic"
                                label="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} variant="outlined" />
                        </div>
                        <div className="date-input">
                            <Typography style={{ textAlign: "left" }} sx={{ mt: 2, mb: 3 }}>Choose Date</Typography>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                            >
                                <DateRangePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue)
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </>
                                    )}
                                />
                            </LocalizationProvider>
                        </div>

                        <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            value={comments}
                            rows={4}
                            defaultValue="Reason"
                            onChange={(e) => setComments(e.target.value)}
                        />
                        <div className="submit-btn">
                            <Button onClick={handleSubmit} style={{ width: "100px" }} variant="contained">Submit</Button>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            {/* Same as */}
                            <ToastContainer />
                        </div>
                    </FormControl>
                </div>
            </div>
        </>
    );
}

export default ApplayForLeave;
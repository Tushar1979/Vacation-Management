import { Box, FormControl, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

import { useState } from "react";


function ApplayForLeave() {
    const [value, setValue] = useState([null, null]);

    return (
        <>
            <div className="man-box">
                <div className="text-label">
                    <span>Request for Leave</span>
                </div>
                <div className="form-box">
                    <FormControl>
                        <div className="text-input">
                            <TextField fullWidth id="outlined-basic" label="Enter your name" variant="outlined" />
                        </div>
                        <div className="date-input">
                            <Typography sx={{ mt: 2, mb: 3 }}>Choose Date</Typography>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                            >
                                <DateRangePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
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
                            rows={4}
                            defaultValue="Reason"
                        />
                        {/* Reason */}
                    </FormControl>
                </div>
            </div>
        </>
    );
}

export default ApplayForLeave;
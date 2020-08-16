import React from "react"
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
// import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Fab from '@material-ui/core/Fab';
import './../App.css'

import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    Divider,
    Button,
    Grid,
    MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
    addButton: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        zIndex: 99
    }
});


const CatInputs = (props) => {
    const clickButton = () => {
        props.addField();
    }

    const clickButtonConfiguration = (event, index) => {
        event.preventDefault()
        props.addConfiguration(index)
        props.addBtnConfiguration(index)
    }

    const runDebug = (index) => {
        props.runDebug(index)
    }

    const addButtonConfiguration = (event, index, indexConfigObj) => {
        event.preventDefault()
        props.addBtnConfiguration(index)
    }

    const changeHandlerFieldName = (event, name, inde) => {
        props.setFieldName(event.target.value, name, inde)
    }

    return (
        props.fields.map((val, idx) => {
            console.log(val)
            let dateId = `date-${idx}`,
                employer = `employer-${idx}`,
                position_of_contractor = `position_of_contractor-${idx}`,
                reason_for_leaving = `reason_for_leaving-${idx}`,
                notice_required = `notice_required-${idx}`,
                salary = `salary-${idx}`
            return (
                // <FuseAnimate animation="transition.expandIn" delay={300}>
                <Grid container spacing={3} className='mt-3' className='margin-top-15px'>

                    <Grid item md={4} xs={12}>
                        <TextField

                            required
                            fullWidth
                            name={dateId}
                            data-id={idx}
                            label="Date"
                            type="date"
                            id={dateId}
                            defaultValue="2017-05-24"
                            onChange={((e) => { changeHandlerFieldName(e, 'date', idx) })}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            className="mb-24"
                            label="Employer"
                            id={employer}
                            onChange={((e) => { changeHandlerFieldName(e, 'employer', idx) })}
                            name={employer}
                            data-id={idx}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            className="mb-24"
                            label="Salary"
                            id={salary}
                            onChange={((e) => { changeHandlerFieldName(e, 'salary', idx) })}
                            name={salary}
                            data-id={idx}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            className="mb-24"
                            label="Position of contractor"
                            id={position_of_contractor}
                            onChange={((e) => { changeHandlerFieldName(e, 'position_of_contractor', idx) })}
                            name={position_of_contractor}
                            data-id={idx}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            className="mb-24"
                            label="Reason for leaving"
                            id={reason_for_leaving}
                            onChange={((e) => { changeHandlerFieldName(e, 'reason_for_leaving', idx) })}
                            name={reason_for_leaving}
                            data-id={idx}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            className="mb-24"
                            label="Notice Required"
                            id={notice_required}
                            onChange={((e) => { changeHandlerFieldName(e, 'notice_required', idx) })}
                            name={notice_required}
                            data-id={idx}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                // </FuseAnimate >
            )
        })
    )
}
export default CatInputs
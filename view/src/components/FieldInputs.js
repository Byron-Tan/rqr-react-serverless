import React from "react"
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
// import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import './../App.css'
import {
    Card,
    CardActions,
    CardContent,
    Divider,
    Button,
    Grid,
    MenuItem,
} from "@material-ui/core";




const CatInputs = (props) => {
    const styles = makeStyles({
        addButton: {
            position: 'absolute',
            right: 12,
            bottom: 12,
            zIndex: 99
        },
        marginTop15px: {
            marginTop: '15px'
        },
    });
    console.log(props)
    const classes = styles();

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

    const changeHandlerFieldName = (event, inde) => {
        props.setFieldName(event.target.value, inde)
    }

    return (
        props.fields.map((val, idx) => {
            let dateId = `date-${idx}`, collegeNameId = `college-Name-${idx}`, qualificationId = `qualification-${idx}`
            console.log('val', 'val in fieldinput')
            return (
                // <FuseAnimate animation="transition.expandIn" delay={300}>
                <div >

                    <Grid className={classes.marginTop15px} container spacing={3} className='margin-top-15px'>

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
                                onChange={((e) => { changeHandlerFieldName(e, idx) })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                className="mb-24"
                                label="College Name"
                                id={collegeNameId}
                                onChange={((e) => { changeHandlerFieldName(e, idx) })}
                                name={collegeNameId}
                                data-id={idx}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                className="mb-24"
                                label="Qualification gained"
                                id={qualificationId}
                                onChange={((e) => { changeHandlerFieldName(e, idx) })}
                                name={qualificationId}
                                data-id={idx}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </div>
                // </FuseAnimate >
            )
        })
    )
}
// export default withStyles(styles)(CatInputs);

export default CatInputs
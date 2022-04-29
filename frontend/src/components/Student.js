import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const apiUrl = "https://aeec-2601-646-9881-b40-80ce-aa9-35e8-a766.ngrok.io/vaccination/record/"
// Change this to ngrok url

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [unique_id, setUniqueId] = useState('')
  const [vaccinationRecord, setVaccinationRecord] = useState([])
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault()
    console.log(unique_id)
    fetch(apiUrl + unique_id)
      .then((res) => res.json())
      .then((result) => {
        console.log("Vaccination Record is set")
        setVaccinationRecord(result)
      })


  }

  useEffect(() => {
    // fetch("http://localhost:8080/student/getAll")
    //   .then(res => res.json())
    //   .then((result) => {
    //     setStudents(result);
    //   }
    //   )
  }, [])
  return (

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Enter your unique Government ID</h1>

        <form className={classes.root} noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Unique Government ID" variant="outlined" fullWidth
            value={unique_id}
            onChange={(e) => setUniqueId(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>

      </Paper>
      <h1>Vaccination Record</h1>

      <Paper elevation={3} style={paperStyle}>


        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={vaccinationRecord.id}>
          Id: {vaccinationRecord.id}<br />
          Name: {vaccinationRecord.name}<br />
          dateOfFirstDose: {vaccinationRecord.dateOfFirstDose} <br />
          dateOfSecondDose:  {vaccinationRecord.dateOfSecondDose} <br />
          typeOfVaccine: {vaccinationRecord.typeOfVaccine} <br />
          content:  {vaccinationRecord.content} <br />
        </Paper>
  
}


      </Paper>



    </Container>
  );
}

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'
import Button from '@mui/material/Button'

import NavBar from '../components/NavBar'
import Background from '../components/Background'
import Container from '../components/Container';
import Heading from '../components/Heading';


const SHEET_ID = '1zE596bTE-l1O7aMgWu3XCH7YMF32Ut-9-Urzg8vnFtI';
const ACCESS_TOKEN = 'ya29.a0ARrdaM-rRp99nFZtGUp4JRlXvyp19uRN_9NE4B1GW95aC3GlcSiXQ0WE6S09zggMg3RvddVcFoo7urAaGfu4-MSmOxHBnuD24-0BCRvRqf_96v1rrE3DlAkeu2mqZTW5oJkc5ZLcVqZschcAEt6tm0iyx8OH';





const defaultUser = {
        fname: '',
        title: '',
        country: '',
        email: '',
        func: '',
        institution: '',
        tel: ''
    };


const useStyles = makeStyles({
    formControl : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '80vh',
        width: '2.20rem',
        color: 'white'
    },
    formItem: {
        width: '2.10rem',
    }

})

function FormPage({language, setLanguage}) {


    const [user, setUser] = useState({...defaultUser});

    const [emails, setEmails] = useState([]);



    const updateSheetValues = () => {
    axios({
      url: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: 0,
              endColumnIndex: 1,
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 0
            },
            cell: {
              userEnteredValue: {
                "numberValue": 10
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }






    const handleFNameChange = (event) => {
        return setUser({
            ...user,
            fname: event.target.value
        })
    }

    const handleTitleChange = (event) => {
        return setUser({
            ...user,
            title: event.target.value
        })
    }

    const handleCountryChange = (event) => {
        return setUser({
            ...user,
            country: event.target.value
        })
    }

    const handleEmailChange = (event) => {
        return setUser({
            ...user,
            email: event.target.value
        })
    }

    const handleFuncChange = (event) => {
        return setUser({
            ...user,
            func: event.target.value
        })
    }

    const handleInstitutionChange = (event) => {
        return setUser({
            ...user,
            institution: event.target.value
        })
    }

    const handleTelChange = (event) => {
        return setUser({
            ...user,
            tel: event.target.value
        })
    }


    const classes = useStyles();


    return <div style={{overflowX: 'hidden'}}>
        <NavBar language={language} setLanguage={setLanguage} />
    <Background>
        <div style={{position: 'absolute', right: '120px', top: '16%',}}>
        {language == 'ro' ? <>
            <FormControl
                id='formular'
                className={classes.formControl}>
                <TextField 
                    id="fname"
                    name="fname"
                    label="Nume Complet" 
                    variant="filled" 
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='text'
                    value={user.fname}
                    onChange={(event) => handleFNameChange(event)}/>
                <TextField 
                    id="title" 
                    name="title"
                    label="Titlu ştiinţific / Grad didactic" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='text'
                    value={user.title}
                    onChange={(event) => handleTitleChange(event)}/>
                <TextField 
                    id="country" 
                    name="country"
                    label="Ţara / Oraşul" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='text'
                    value={user.country}
                    onChange={(event) => handleCountryChange(event)}/>
                <TextField 
                    id="email" 
                    name="email"
                    label="Email" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    value={user.email}
                    onChange={(event) => handleEmailChange(event)}/>
                <TextField 
                    id="func" 
                    name="func"
                    label="Funcţia" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='text'
                    value={user.func}
                    onChange={(event) => handleFuncChange(event)}/>
                <TextField 
                    id="institution" 
                    name="institution"
                    label="Instituţia" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='text'
                    value={user.institution}
                    onChange={(event) => handleInstitutionChange(event)}/>
                <TextField 
                    id="tel" 
                    name="tel"
                    label="Numărul de telefon" 
                    variant="filled"
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem'}}}
                    inputProps={{style: {fontSize: '0.10rem'}}}
                    type='tel'
                    pattern='[0-9]{9}'
                    value={user.tel}
                    onChange={(event) => handleTelChange(event)}/>
                <Button 
                    variant='contained'
                    sx={{fontSize: '0.13rem'}}
                    type='submit'
                    onClick={() => updateSheetValues()}>
                    Înregistrează
                </Button>

            </FormControl>
        </> :
        <div>en</div>
        
}
</div>
</Background>
        </div>

}

export default FormPage;
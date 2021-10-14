import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'
import Button from '@mui/material/Button'

import NavBar from '../components/NavBar'
import Background from '../components/Background'

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
    const [users, setUsers] = useState([]);
    const [errorText, setErrorText] = useState('');
    const [emptyErrorFn, setEmptyErrorFn] = useState('');
    const [emptyErrorCo, setEmptyErrorCo] = useState('');
    const [emptyErrorTi, setEmptyErrorTi] = useState('');
    const [emptyErrorFu, setEmptyErrorFu] = useState('');
    const [emptyErrorIn, setEmptyErrorIn] = useState('');
    const [emptyErrorTe, setEmptyErrorTe] = useState('');

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        axios.get('https://getpantry.cloud/apiv1/pantry/b1e1f826-c62e-4789-a668-058293348823/basket/uemf')
            .then(res => setUsers([...res.data.users]))
            .catch(err => console.log(err));

        let arr = [];
        users.forEach(u => {
            arr.push(u.email);
            setEmails([...arr]);
            console.log(emails);
        })
    },[users.length]);

    const isEmpty = (str) => {
        if(str.length <= 0)
            return true;
        return false;
    }


    const handleFNameChange = (event) => {
        if(isEmpty(event.target.value))
            setEmptyErrorFn(language === 'ro' ? 'Acest camp nu poate fi gol' : 'This field can not be empty');
        else
            setEmptyErrorFn('');
        return setUser({
            ...user,
            fname: event.target.value
        })
    }

    const handleTitleChange = (event) => {
        if(isEmpty(event.target.value))
            setEmptyErrorTi(language === 'ro' ? 'Acest camp nu poate fi gol' : 'This field can not be empty');
        else
            setEmptyErrorTi('');
        return setUser({
            ...user,
            title: event.target.value
        })
    }

    const handleCountryChange = (event) => {
        if(isEmpty(event.target.value))
            setEmptyErrorCo(language === 'ro' ? 'Acest camp nu poate fi gol' : 'This field can not be empty');
        else
            setEmptyErrorCo('');
        return setUser({
            ...user,
            country: event.target.value
        })
    }

    const handleEmailChange = (event) => {
        if(emails.includes(event.target.value)){
                setErrorText(language === 'ro' ? 'Acest email a fost deja folosit' : 'This email is already registered');
            }
            else{
                setErrorText('');
            }
           
        return setUser({
            ...user,
            email: event.target.value
        })
    }

    const handleFuncChange = (event) => {
        if(isEmpty(event.target.value))
            setEmptyErrorFu(language === 'ro' ? 'Acest camp nu poate fi gol' : 'This field can not be empty');
        else
            setEmptyErrorFu('');
        return setUser({
            ...user,
            func: event.target.value
        })
    }

    const handleInstitutionChange = (event) => {
        if(isEmpty(event.target.value))
            setEmptyErrorIn(language === 'ro' ? 'Acest camp nu poate fi gol' : 'This field can not be empty');
        else
            setEmptyErrorIn('');
        return setUser({
            ...user,
            institution: event.target.value
        })
    }

    const handleSubmit = () => {
        if(!(user.fname.length === 0 ||
             user.title.length === 0 ||
             user.func.length === 0 ||
             user.institution.length === 0 ||
             user.tel.length === 0 ||
             user.email.length === 0 ||
             user.country.length === 0)){
                if(!emails.includes(user.email)){
                    
                    setErrorText('');
                    setUsers([...users, {...user}]);
                    axios.put('https://getpantry.cloud/apiv1/pantry/b1e1f826-c62e-4789-a668-058293348823/basket/uemf',{
                        users: [{...user}]
                    }).then(res => {
                        setUser({...defaultUser});
                                    });
                }
            }
            


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
                    label="Nume, Prenume" 
                    variant="filled" 
                    error={emptyErrorFn === '' ? false : true}
                    helperText={emptyErrorFn}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.fname}
                    onChange={(event) => handleFNameChange(event)}/>
                <TextField 
                    id="title" 
                    name="title"
                    label="Titlu ştiinţific / Grad didactic" 
                    variant="filled"
                    error={emptyErrorTi === '' ? false : true}
                    helperText={emptyErrorTi}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.title}
                    onChange={(event) => handleTitleChange(event)}/>
                <TextField 
                    id="country" 
                    name="country"
                    label="Ţara / Oraşul" 
                    variant="filled"
                    error={emptyErrorCo === '' ? false : true}
                    helperText={emptyErrorCo}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.country}
                    onChange={(event) => handleCountryChange(event)}/>
                <TextField 
                    id="email" 
                    name="email"
                    label="Email" 
                    variant="filled"    
                    error={errorText === '' ? false : true}
                    helperText={errorText}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    type='email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    value={user.email}
                    onChange={(event) => handleEmailChange(event)}/>
                <TextField 
                    id="func" 
                    name="func"
                    label="Funcţia" 
                    variant="filled"
                    error={emptyErrorFu === '' ? false : true}
                    helperText={emptyErrorFu}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.func}
                    onChange={(event) => handleFuncChange(event)}/>
                <TextField 
                    id="institution" 
                    name="institution"
                    label="Instituţia" 
                    variant="filled"
                    error={emptyErrorIn === '' ? false : true}
                    helperText={emptyErrorIn}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.institution}
                    onChange={(event) => handleInstitutionChange(event)}/>
                <TextField 
                    id="tel" 
                    name="tel"
                    label="Numărul de telefon" 
                    variant="filled"
                    error={emptyErrorTe === '' ? false : true}
                    helperText={emptyErrorTe}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='tel'
                    pattern='[0-9]{9}'
                    value={user.tel}
                    onChange={(event) => handleTelChange(event)}/>
                <Button 
                    variant='contained'
                    sx={{fontSize: '0.08rem'}}
                    type='submit'
                    onClick={() => handleSubmit() }>
                    Înregistrează
                </Button>

            </FormControl>
        </> :
                <>
            <FormControl
                id='formular'
                className={classes.formControl}>
                <TextField 
                    id="fname"
                    name="fname"
                    label="Name, Surname" 
                    variant="filled" 
                    error={emptyErrorFn === '' ? false : true}
                    helperText={emptyErrorFn}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.fname}
                    onChange={(event) => handleFNameChange(event)}/>
                <TextField 
                    id="title" 
                    name="title"
                    label="Scientific title / Didactic degree" 
                    variant="filled"
                    error={emptyErrorTi === '' ? false : true}
                    helperText={emptyErrorTi}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.title}
                    onChange={(event) => handleTitleChange(event)}/>
                <TextField 
                    id="country" 
                    name="country"
                    label="Country / City" 
                    variant="filled"
                    error={emptyErrorCo === '' ? false : true}
                    helperText={emptyErrorCo}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.country}
                    onChange={(event) => handleCountryChange(event)}/>
                <TextField 
                    id="email" 
                    name="email"
                    label="Email" 
                    variant="filled"    
                    error={errorText === '' ? false : true}
                    helperText={errorText}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    type='email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    value={user.email}
                    onChange={(event) => handleEmailChange(event)}/>
                <TextField 
                    id="func" 
                    name="func"
                    label="Function" 
                    variant="filled"
                    error={emptyErrorFu === '' ? false : true}
                    helperText={emptyErrorFu}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.func}
                    onChange={(event) => handleFuncChange(event)}/>
                <TextField 
                    id="institution" 
                    name="institution"
                    label="Institution" 
                    variant="filled"
                    error={emptyErrorIn === '' ? false : true}
                    helperText={emptyErrorIn}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='text'
                    value={user.institution}
                    onChange={(event) => handleInstitutionChange(event)}/>
                <TextField 
                    id="tel" 
                    name="tel"
                    label="Phone number" 
                    variant="filled"
                    error={emptyErrorTe === '' ? false : true}
                    helperText={emptyErrorTe}
                    FormHelperTextProps={{
                        style: {
                            fontSize: '10px'
                        }
                    }}
                    className={classes.formItem}
                    InputLabelProps={{style: {fontSize: '0.10rem', fontWeight: 'bold'}}}
                    inputProps={{style: {fontSize: '0.10rem' , fontWeight: 'bold'}}}
                    type='tel'
                    pattern='[0-9]{9}'
                    value={user.tel}
                    onChange={(event) => handleTelChange(event)}/>
                <Button 
                    variant='contained'
                    sx={{fontSize: '0.08rem'}}
                    type='submit'
                    onClick={() => handleSubmit() }>
                    Register
                </Button>

            </FormControl>
        </>
        
}
</div>
</Background>
        </div>

}

export default FormPage;
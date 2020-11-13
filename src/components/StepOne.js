import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IntlTelInput from 'react-intl-tel-input';
import '@material-ui/core/styles';
import  'react-intl-tel-input/dist/main.css';
import {Typography,
        Button,
        Grid,
        Checkbox,
        TextField,
        OutlinedInput,
        FormControl,
        InputLabel,
        InputAdornment,
        IconButton,
        
} from '@material-ui/core';
   
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';    
import SendSharpIcon from '@material-ui/icons/SendSharp';   
  const useStyles = makeStyles({
      mainContainer:{
          display:"grid",
          justifyContent:"center",
          position: "relative",
          zIndex: 5
      },
      formContainer:{
          
          position:"relative",
          width:"28rem",
          height:"auto",
          padding: "2rem"
      },
      inputField:{
        width:"100%", 
        marginBottom:"1rem"
      },
      btn:{
         width:"100%",
         height:"3rem",
         background:"red",
         color:"#fff",
        "&:hover":{
            background:"red"
        }
         
      }
  })  
  
  

const StepOne = () => {
    const [showPasswordValue,setShowPasswordValue] = useState({showPassword:false})
    const [showConfirmPasswordValue,setShowConfirmPasswordValue] = useState({showConfirmPassword:false})
    const handleClickShowPassword = () => {
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <Typography variant="h5" style={{color:'#999', textAlign:'center'}}>
                Sign Up With Email
            </Typography>
            <div className={classes.formContainer}>
            <form>
                <TextField 
                className={classes.inputField}
                label="First Name"
                variant="outlined"
                
                />
                 <TextField 
                 className={classes.inputField}
                label="Last Name"
                variant="outlined"
                
                />
                <IntlTelInput preferredCountries={["in"]}/>
                <TextField 
                
                className={classes.inputField}
                label="Email"
                variant="outlined"
                
                />
               <FormControl className={classes.inputField} variant="outlined">
                   <InputLabel>Password</InputLabel>
                <OutlinedInput
                   labelWidth={70}
                   type = {showPasswordValue.showPassword ? "text" : "password"}
                 endAdornment={
                 <InputAdornment position="end">
                 <IconButton edge="end"
                   onClick = {handleClickShowPassword}
                  >
                    {showPasswordValue.showPassword ? <Visibility/> :<VisibilityOff/> }
                 </IconButton>
                 </InputAdornment>
                 }
                />
               </FormControl>
               <FormControl className={classes.inputField} variant="outlined">
                   <InputLabel> Confirm Password</InputLabel>
                <OutlinedInput
                   labelWidth={130}
                   type = {showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
                 endAdornment={
                 <InputAdornment position="end">
                 <IconButton edge="end"
                   onClick = {handleClickShowConfirmPassword}
                  >
                    {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> :<VisibilityOff/> }
                 </IconButton>
                 </InputAdornment>
                 }
                />
               </FormControl>
               <Button className={classes.btn} variant="contained" endIcon = {<SendSharpIcon/>}
                        type="submit"
               >
                      SIGN UP
               </Button>
               
            </form>
            </div>
        </div>
    );
}

export default StepOne;

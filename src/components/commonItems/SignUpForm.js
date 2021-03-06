import { Grid, makeStyles, TextField } from '@material-ui/core'
import React ,{useState} from 'react'


  const initialValues = {
      useName:'',
      name:'',
      password:'',
      confirmPassword:'',
      phoneNo:'',
      gender:'male',
      email:''
}

const useStyle = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            margin:'5px'
        }
    }
}))

export default function SignUpForm() {
    const classes = useStyle()
    const [values, setvalues] = useState(initialValues)
    return (
        
        <form className={classes.root} >
            <Grid container xs={12}>
                 <Grid item xs={12}>
                     <TextField
                     variant='outlined'
                     label='Full Name'
                     value={values.name}
                     style={{width:'100%'}}
                     />
                 </Grid>
                 <Grid item xs={12}>
                     <TextField
                     variant='outlined'
                     label='password'
                     value={values.name}
                     style={{width:'100%'}}
                     />
                 </Grid>
                 
                 <Grid item xs={12}>
                     <TextField
                     variant='outlined'
                     label='confirmPassword'
                     value={values.name}
                     style={{width:'100%'}}
                     />
                 </Grid>

            </Grid>

        </form>
        
    )
}

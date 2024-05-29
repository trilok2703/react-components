import React from 'react';
import {useFormik} from 'formik';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log("form submit",values);
        },
        validate:(values)=>{
            let errors = {};
            if(!values.name){
                errors.name ="Name required";
            }
            if(!values.email){
                errors.email="Email required";
            }
            if(!values.password){
                errors.password="Password required";
            }
            return errors;
        }
    });

    return(
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
            <div>
                <label>User Name</label>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                {formik.errors.name ? <span style={{"color":"red"}}>{formik.errors.name}</span>:null}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                {formik.errors.email ? <span style={{"color":"red"}}>{formik.errors.email}</span>:null}
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password ? <span style={{"color":"red"}}>{formik.errors.password}</span>:null}
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default Form;
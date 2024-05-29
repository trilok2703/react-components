// Develop a simple form component with input fields for name, email, and message. 
//Implement basic form validation (e.g., required fields, email format).
// Use React state to manage the form data and validation errors.

import React, {useRef} from 'react';

const FormComp = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const textboxRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const nameVal = nameRef.current.value;
        const emailVal = emailRef.current.value;
        const textboxVal = textboxRef.current.value;

        if(nameVal && emailVal && textboxVal) {
            
        }
    }


    return(
        <form onSubmit={((e)=>handleSubmit(e))}>
            <div>
                <label>User Name</label>
                <input type="text" name="name" ref={nameRef} required/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" ref={emailRef} required/>
            </div>
            <div>
                <label>message</label>
                <textarea ref={textboxRef}></textarea>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default FormComp;
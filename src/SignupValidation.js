function validation(values)
{
    //alert("")
    let error ={}
    const email_pattern=/^[^\s@]+@[^\s@]+[^\s@]+$/
    // const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const password_pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  
    //NAME
    if(values.name==="")
    {
      error.name="Name should not be empty"
    }
    else
    {
        error.name=""
    }

    //SURNAME
    if(values.surname==="")
    {
      error.surname="Surname should not be empty"
    }
    else
    {
        error.surname=""
    }
    
    //EMAIL
    if(values.email==="")
    {
      error.email="Email should not be empty"
    }
    else if (!email_pattern.test(values.email))
    {
        error.email="Enter a valid email."
    }
    else
    {
        error.email=""
    }

    //PASSWORD
    if(values.password==="")
    {
      error.password="password should not be empty"
    }
    else if (!password_pattern.test(values.password))
    {
        error.password="Ensure that the password has small letter,capital letter, a number and it's 6 characters long."
    }
    else
    {
        error.password=""
    }
    return error;
}
export default validation;
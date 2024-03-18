import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName : "",
    lastName : "",
    email : "",
    contact : "",
    address1 : "",
    address2 : "",
};

const phoneRegex = /^\d{10}$/;
const nameRegex = /^[A-Z][a-z]{0,29}$/;


const userSchema = yup.object().shape({
    firstName : yup.string().matches(nameRegex,"First Name is not valid").required("required"),
    lastName : yup.string().matches(nameRegex,"Last Name is not valid").required("required"),
    email : yup.string().email("Email is not valid").required("required"),
    contact : yup.string().matches(phoneRegex,"Phone Number is not valid").required("required"),
    address1 : yup.string().required("required"),
    address2 : yup.string().required("required"),
})

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width : 600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}>
                {({values, errors, touched, handleBlur, handleSubmit, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                        display="grid" 
                        gap="30px" 
                        gridTemplateColumns="repeat(4 , minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn : isNonMobile ? undefined : "span 4"}
                        }}>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{
                                gridColumn : "span 2"
                            }}/>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{
                                gridColumn : "span 2"
                            }}/>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{
                                gridColumn : "span 4"
                            }}/>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{
                                gridColumn : "span 4"
                            }}/>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{
                                gridColumn : "span 4"
                            }}/>
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{
                                gridColumn : "span 4"
                            }}/>
                        </Box>
                        <Box display="flex" justifyContent="flex-end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form
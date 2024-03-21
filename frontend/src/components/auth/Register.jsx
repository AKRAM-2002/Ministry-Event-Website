import { Formik } from "formik";
import { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Card, Checkbox, Grid, TextField, useTheme, Box, styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";
import svgImage from '../../assets/RegisterSVG.svg'
import useAuth from "../../hooks/useAuth";
import { Paragraph } from "../../utils/Typography";
import { useSignUp } from "@clerk/clerk-react";

// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center"
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: "center"
}));

const ContentBox = styled(JustifyBox)(() => ({
  height: "100%",
  padding: "32px",
  background: "rgba(0, 0, 0, 0.01)",

  ".img-wrapper": {
    marginTop: "-10%",
    height: "75%",
    minWidth: 550,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
}));

const JWTRegister = styled(JustifyBox)(() => ({
  
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    height: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center"
  }
}));



// initial login credentials
const initialValues = {
  email: "",
  password: "",
  username: "",
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "يجب أن يتكون كلمة المرور من 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة!"),
  email: Yup.string().email("عنوان البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب!")
});

export default function RegisterPage() {
  const theme = useTheme();
  
  const [loading, setLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");



  const handleFormSubmit = async (values) => {
    setLoading(true);

    if (!isLoaded) {
      return;
    }

    try {
     await signUp.create({
       username: values.username,
       email: values.email,
       password: values.password,
     })

     // send the email.
     await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
     // change the UI to our pending section.
     setPendingVerification(true);


    } catch (e) {
      alert("Error registering")
      setLoading(false);
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        alert("Complete Sign Up");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
            <img
                width="100%"
                alt="Register"
                src={svgImage}
                className="img-wrapper"
              />   
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              {!pendingVerification && (
                <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label="اسم المستخدم"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={handleChange}
                      helperText={touched.username && errors.username}
                      error={Boolean(errors.username && touched.username)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="البريد الإلكتروني"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="كلمة المرور"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />

                    <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                      لقد قرأت ووافقت على شروط الخدمة.
                      </Paragraph>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}>
                        تسجيل
                    </LoadingButton>
                    <Paragraph>
                    لديك حساب بالفعل؟
                      <NavLink
                        to="/login"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}>
                        تسجيل الدخول
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
              )}
              {pendingVerification && (
              <div>
                <form>
                  <input
                    value={code}
                    placeholder="Code..."
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button onClick={onPressVerify}>
                    Verify Email
                  </button>
                </form>
              </div>
            )}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
}

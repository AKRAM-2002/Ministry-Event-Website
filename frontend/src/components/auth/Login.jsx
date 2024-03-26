import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Checkbox, Grid, TextField, Box, styled, useTheme} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import svgImage from '../../assets/LoginSVG.svg'


import { Paragraph } from "../../utils/Typography";
import { useSignIn} from "@clerk/clerk-react";

// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex"
}));

const ContentBox = styled("div")(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)"
}));

const StyledRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center"
  },

  ".img-wrapper": {
    marginLeft: "-3rem",
    height: "60%",
    minWidth: 550,
    display: "flex",
    padding: "0rem",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
}));

// initial login credentials
const initialValues = {
  email: "jason@ui-lib.com",
  password: "dummyPass",
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "يجب أن تكون كلمة المرور طولها 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة!"),
  email: Yup.string().email("عنوان البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب!")
});

export default function LoginPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();
  

  const handleFormSubmit = async (values) => {
    // if(!isLoaded){
    //   return;
    // }
    // setLoading(true);
    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });
 
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        navigate('/dashboard')
      }
      else {
        /*debugging line */
        console.log(result);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div className="img-wrapper">
              <img alt="Wipo" src={svgImage} />
            </div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit} >
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
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="space-between">
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>تذكرني</Paragraph>
                      </FlexBox>

                      <NavLink
                        to="/forgotPasword"
                        style={{ color: theme.palette.primary.main }}>
                        هل نسيت كلمة المرور؟
                      </NavLink>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}>
                      تسجيل الدخول
                    </LoadingButton>

                    <Paragraph>
                      ليس لديك حساب؟
                      <NavLink
                        to="/register"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}>
                        التسجيل
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </StyledRoot>
  );
}

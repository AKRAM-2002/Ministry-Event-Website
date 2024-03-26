import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Grid, styled, TextField } from "@mui/material";
import { useAuth, useClerk, useSession, useSignIn } from "@clerk/clerk-react";

// STYLED COMPONENTS
const StyledRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh !important",
}));

const ContentBox = styled("div")(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default
}));

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState('');

  const { isSignedIn } = useAuth();
  const {isLoaded, signIn, setActive} = useSignIn();


  if (!isLoaded){
    return null;
  }

  if (isSignedIn){
    navigate('/dashboard');
  }

  // Send the password reset code to the user's email
  async function create(e) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      .then(_ => {
        setSuccessfulCreation(true);
        setError('');
      })
      .catch(err => {
        console.error('error', err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }
 
  // Reset the user's password. 
  // Upon successful reset, the user will be 
  // signed in and redirected to the home page
  async function reset(e) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      })
      .then(result => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true);
          setError('');
        } else if (result.status === 'complete') {
          // Set the active session to 
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId });
          setError('');
        } else {
          console.log(result);
        }
      })
      .catch(err => {
        console.error('error', err.errors[0].longMessage)
        setError(err.errors[0].longMessage);
      });
  }

  return (
    <StyledRoot>
      <Card sx={{ maxWidth: 800, margin: "1rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <ContentBox>
              <form onSubmit={!successfulCreation ? create : reset}>
               {
                !successfulCreation && (
                  <>
                   <TextField
                    type="email"
                    name="email"
                    size="small"
                    label="البريد الإلكتروني"
                    value={email}
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 3, width: "100%" }}
                  />
                  <Button fullWidth variant="contained" color="primary" type="submit">
                  إعادة تعيين كلمة المرور
                  </Button>
                  {error && <p>{error}</p>}
                  </>
                )
               }
               {successfulCreation && (
                  <>
                    <TextField
                      type='password'
                      label='Enter your new password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      variant='outlined'
                      fullWidth
                      sx={{ mb: 3 , width: '100%'}}
                    />
        
                    <TextField
                      type='text'
                      label='Enter the password reset code that was sent to your email'
                      value={code}
                      onChange={e => setCode(e.target.value)}
                      variant='outlined'
                      fullWidth
                      sx={{ mb: 3 }}
                    />
        
                    <Button fullWidth variant="contained" color="primary" type="submit">
                    إعادة تعيين كلمة المرور
                    </Button>
                    {error && <p>{error}</p>}
                  </>
                )}

                <Button
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  sx={{ mt: 2 }}>
                  Go Back
                </Button>
              </form>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </StyledRoot>
  );
}

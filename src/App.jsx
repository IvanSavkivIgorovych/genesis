import {
  Typography,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Pagination,
  Stack,
} from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router, Routes, Route, Link } from "react-router-dom";
import Course from "./component/Course";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

function App() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://api.wisey.app/api/v1/core/preview-courses", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6">Application for learning</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Application for learning
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone. This is an application for learning different
                courses. I'm trying to make this sentence as long as possible so
                we can see how does it look like on the screen.
              </Typography>
            </Container>
          </Box>

          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="/course">
                        <Button size="small">View</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack spacing={2}>
              <Pagination
                count={10}
                showFirstButton
                showLastButton
                sx={{
                  ".css-wjh20t-MuiPagination-ul": {
                    justifyContent: "center",
                    marginTop: "50px",
                  },
                }}
              />
            </Stack>
          </Container>
        </main>
      </ThemeProvider>

      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/course" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;

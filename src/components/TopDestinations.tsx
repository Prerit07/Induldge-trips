// import {Grid, Card, CardContent, Typography, CardMedia,  Stack, Button, Divider} from "@mui/material"
import Container from "@mui/material/Container";
import DestinationData from "../Data/DestinationData.json";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import TabPanel from "./Tabs";
import StackComponent from "./Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconsStack from "./IconsStack";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const TopDestinations = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#fff", marginTop: "150px", marginBottom: "15px" }}
        >
          Top Destinations
        </Typography>
        <Grid
          container
          spacing={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {DestinationData.map((output) => (
            <>
              <Paper
                sx={{
                  p: 10,
                  margin: "auto",
                  maxWidth: 900,
                  flexGrow: 1,
                  boxShadow: 10,
                  marginBottom: 5,
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <ButtonBase
                      sx={{ width: 300, height: 200, marginLeft: -10 }}
                    >
                      <Img
                        alt="complex"
                        src={output.image}
                        sx={{ borderRadius: "10px", boxShadow: 10 }}
                      />
                    </ButtonBase>
                    <Button
                      sx={{
                        backgroundColor: "none",
                        marginLeft: -10,
                        border: "1px solid #B971F0",
                        color: "#100D37",
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={10}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          fontSize={30}
                          fontWeight={700}
                        >
                          {output.title}
                        </Typography>
                        <Divider>
                          <Chip
                            sx={{
                              backgroundColor: "#B971F0",
                              color: "#fff",
                              fontWeight: "600",
                            }}
                            label="4 Nights / 5 Days"
                          />
                        </Divider>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <TabPanel />
                    </Grid>
                  </Grid>
                  <IconsStack />
                </Grid>
              </Paper>
              <div>
                <StackComponent />
              </div>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TopDestinations;

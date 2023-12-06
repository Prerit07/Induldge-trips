import {Grid, Card, CardContent, Typography, CardMedia, Stack, Button, Divider} from "@mui/material"
import Container from "@mui/material/Container"
import DestinationData from "../Data/DestinationData.json"
import { CardActionArea } from '@mui/material';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TopDestinations = () =>{
    return (
      <>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#fff", marginTop: "50px", marginBottom: "15px" }}
          >
            Top Destinations
          </Typography>
          <Grid container spacing={5}>
            {DestinationData.map((output, index) => (
              <Grid item xs={12} md={4} sm={4} key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: "20px", padding: "10px", border:"5px solid black" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={output.image}
                      alt="image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        {output.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {output.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                    <Button variant="outlined" startIcon={<BookmarkBorderRoundedIcon />}>
                      save
                    </Button>
                    <Button variant="contained" endIcon={<CheckCircleIcon />}>
                      Book Now
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
}

export default TopDestinations;
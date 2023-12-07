import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import MovieIcon from "@mui/icons-material/Movie";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "none",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#B971F0",
}));

export default function DividerStack() {
  return (
    <div>
      <Stack direction="row" spacing={8} marginLeft={-5}>
        <Item>
          <HotelIcon />
        </Item>
        <Item>
          <RestaurantIcon />
        </Item>
        <Item>
          <EmojiTransportationIcon />
        </Item>
        <Item>
          <MovieIcon />
        </Item>
      </Stack>
    </div>
  );
}

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function StackComponent() {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: "#fff",
    backgroundColor: "#B971F0",
    "&:hover": {
      backgroundColor: "#100D37",
      color: "#fff",
    },
  }));
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <ColorButton>Get Quote</ColorButton>
        <Button
          sx={{
            color: "#100D37",
            backgroundColor: "none",
            border: "1px solid #B971F0",
          }}
        >
          Enquire
        </Button>
      </Stack>
    </Box>
  );
}

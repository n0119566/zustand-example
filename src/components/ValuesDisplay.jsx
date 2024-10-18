import { Typography, Box } from "@mui/material";
import { useCountStore } from "../state/useCountStore";

function ValuesDisplay() {
  const getValue = useCountStore((state) => state.getValue);

  return (
    <Box>
      <Typography>Cost = ${getValue("cost")}</Typography>
      <Typography>Gallons = {getValue("gallons")}</Typography>
      <Typography>Miles = {getValue("miles")}</Typography>
      <Typography>Price per Gallon = ${getValue("perGallonCost")}</Typography>
      <Typography>MPG = {getValue("mpg")}</Typography>
    </Box>
  );
}

export default ValuesDisplay;

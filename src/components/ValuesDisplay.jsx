import { Typography, Box } from "@mui/material";
import { useCountStore } from "../state/useCountStore";

function ValuesDisplay() {
  const getValue = useCountStore((state) => state.getValue);

  return (
    <Box>
      <Typography>Cost = ${useCountStore((state) => state.cost)}</Typography>
      <Typography>
        Gallons = {useCountStore((state) => state.gallons)}
      </Typography>
      <Typography>Miles = {useCountStore((state) => state.miles)}</Typography>
      <Typography>
        Price per Gallon = ${useCountStore((state) => state.perGallonCost)}
      </Typography>
      <Typography>MPG = {useCountStore((state) => state.mpg)}</Typography>
    </Box>
  );
}

export default ValuesDisplay;

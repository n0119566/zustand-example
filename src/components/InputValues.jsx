import { Box, TextField } from "@mui/material";
import { useCountStore } from "../state/useCountStore";

function InputValues() {
  const setValue = useCountStore((state) => state.setValue);
  const costPerGallon = useCountStore((state) => state.perGallonCost);
  const miles = useCountStore((state) => state.miles);
  const cost = useCountStore((state) => state.cost);
  const gallons = useCountStore((state) => state.gallons);
  const autoPopulate = useCountStore((state) => state.autoPopulate);

  return (
    <Box>
      <TextField
        sx={{ margin: 1 }}
        value={costPerGallon}
        required
        id="perGallon-required"
        label="Cost per Gallon"
        onChange={(e) => setValue("perGallonCost", e.target.value)}
        onBlur={autoPopulate}
      />
      <TextField
        sx={{ margin: 1 }}
        value={miles}
        required
        id="outlined-required"
        label="Miles"
        onChange={(e) => setValue("miles", e.target.value)}
        onBlur={autoPopulate}
      />

      <TextField
        sx={{ margin: 1 }}
        value={cost}
        required
        id="outlined-required"
        label="Total Cost"
        onChange={(e) => setValue("cost", e.target.value)}
        onBlur={autoPopulate}
      />

      <TextField
        sx={{ margin: 1 }}
        value={gallons}
        required
        id="outlined-required"
        label="Gallons"
        onBlur={autoPopulate}
        onChange={(e) => setValue("gallons", e.target.value)}
      />
    </Box>
  );
}

export default InputValues;

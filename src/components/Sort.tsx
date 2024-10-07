import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function Sort() {
  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label">Sort</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          // value={age}
          label="Sort"
          // onChange={handleChange}
        >
          <MenuItem value="ASC">ASC</MenuItem>
          <MenuItem value="DESC">DESC</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

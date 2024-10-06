import { Checkbox, FormControlLabel } from "@mui/material"

interface Props {
  category: string;
}

export default function CategoryItem({category}: Props) {
  return (
    <li className='border-b-2 border-gray-200'>
      <FormControlLabel control={<Checkbox />}  label={category} color="secondary" />
    </li>
  )
}
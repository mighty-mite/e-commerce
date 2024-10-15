'use client';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Categories() {
  const [value, setValue] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((categories) => setCategories(categories))
      .catch((e) => console.error(e.message));
  }, []);

  const handleChange = (_event: React.ChangeEvent, value: string) => {
    setValue(value);
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('category', value);
    } else {
      params.delete('category');
    }
    params.set('skip', '0');

    router.push(pathname + '?' + params);
  };

  return (
    <ul className="overflow-y-scroll h-96 categories">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Categories
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value=""
            control={<Radio />}
            label="All Categories"
          />
          {categories.map((item: string, i: number) => (
            <FormControlLabel
              key={i}
              value={item}
              control={<Radio />}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </ul>
  );
}

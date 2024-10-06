import { TextField } from "@mui/material";
import Link from "next/link";
import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex items-center'>
      <Link href='/'><Image width='163' height='41' src='logo.svg' alt='logo' /></Link>
      <TextField label="Search products" variant="outlined" />
      <Link href='/cart'><Image width="20" height="21" src="/cart.svg" alt="cart link"/></Link>
      <Link href='/login'><Image width="20" height="19" src="/login.svg" alt="login link"/></Link>
    </header>
  )
}
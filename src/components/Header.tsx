import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { Suspense } from 'react';

export default function Header() {
  return (
    <header className="grid grid-cols-3 container mx-auto py-8">
      <Link className="" href="/">
        <Image priority width="163" height="41" src="logo.svg" alt="logo" />
      </Link>
      <Suspense fallback={<h3>loading</h3>}>
        <Search />
      </Suspense>
      <div className="flex items-center justify-self-end gap-12">
        <Link href="/cart">
          <Image width="20" height="21" src="/cart.svg" alt="cart link" />
        </Link>
        <Link href="/login">
          <Image width="20" height="19" src="/login.svg" alt="login link" />
        </Link>
      </div>
    </header>
  );
}

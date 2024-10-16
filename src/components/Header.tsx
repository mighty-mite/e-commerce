import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between container mx-auto py-8">
      <Link className="" href="/">
        <Image priority width="163" height="41" src="logo.svg" alt="logo" />
      </Link>
      <div className="flex items-center justify-self-end gap-12">
        <Link href="/cart">
          <Image width="25" height="21" src="/cart.svg" alt="cart link" />
        </Link>
        <Link href="/login">
          <Image width="25" height="19" src="/login.svg" alt="login link" />
        </Link>
      </div>
    </header>
  );
}

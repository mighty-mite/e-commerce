import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="container mx-auto flex justify-between items-center py-8">
      <Link className="" href="/">
        <Image width="163" height="41" src="logo.svg" alt="logo" />
      </Link>
      <Link href="/">
        <Image height="20" width="20" alt="github logo" src="github.svg" />
      </Link>
      <p>2024</p>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function BrandComponent() {
  return (
    <Link href={'/'}>
      <Image
        src="/images/beleaf.png"
        alt="Beleaf Logo"
        width={22}
        height={40}
        priority
      />
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';

type CompanyCardComponentProps = {
  companyName: string;
  companySlug: string;
  companyShortDesc: string;
  addressLength: number;
};

export default async function CompanyCardComponent(
  props: CompanyCardComponentProps
) {
  const { companySlug, companyName, companyShortDesc, addressLength } = props;

  return (
    <Link href={`/company/${companySlug}`}>
      <Image
        src={`https://robohash.org/${companyName}?set=set2&size=${180}x${180}`}
        alt={companyName}
        width={180}
        height={180}
      />
      <h3>{companyName}</h3>
      <p>{companyShortDesc}</p>
      {addressLength}
    </Link>
  );
}

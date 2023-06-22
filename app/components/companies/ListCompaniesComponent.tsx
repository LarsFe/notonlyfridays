import Image from 'next/image';
import { Address, Company } from '@prisma/client';

interface CompanyWithAddresses extends Company {
  addresses: Address[];
}

const getCompanies = async (): Promise<CompanyWithAddresses[]> => {
  const data = await fetch('http://localhost:3000/api/companies');
  const companies = await data.json();

  return companies;
};

export default async function ListCompaniesComponent() {
  const companies = await getCompanies();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {companies.map((company) => (
        <div
          key={company.id}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <Image
            src={`https://robohash.org/${
              company.name
            }?set=set2&size=${180}x${180}`}
            alt={company.name}
            width={180}
            height={180}
          />
          <h3>{company.name}</h3>
          <p>{company.short_description}</p>
          <br />
          <a href={company.url} title={company.name}>
            {company.name}
          </a>
          <br />
          <br />
          {company.addresses.map((address: Address) => (
            <address key={address.id}>
              {address.street} {address.house_number}
              <br />
              {address.zip_code} {address.city}
            </address>
          ))}
        </div>
      ))}
    </div>
  );
}

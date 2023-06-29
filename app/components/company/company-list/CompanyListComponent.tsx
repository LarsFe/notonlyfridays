import { Address, Company } from '@prisma/client';
import CompanyCardComponent from '../company-card/CompanyCardComponent';

interface CompanyWithAddresses extends Company {
  addresses: Address[];
}

const getCompanies = async (): Promise<CompanyWithAddresses[]> => {
  const data = await fetch('http://localhost:3000/api/companies');
  const companies = await data.json();

  return companies;
};

export default async function CompanyListComponent() {
  const companies = await getCompanies();

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {companies.map((company) => (
        <li key={company.id}>
          <CompanyCardComponent
            companySlug={company.slug}
            companyName={company.name}
            companyShortDesc={company.short_description}
            addressLength={company.addresses.length}
          />
        </li>
      ))}
    </ul>
  );
}

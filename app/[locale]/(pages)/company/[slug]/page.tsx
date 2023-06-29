'use client';

import { useParams } from 'next/navigation';
import { Address, Company } from '@prisma/client';
import CompanyDetailComponent from '@/app/components/company/company-detail/CompanyDetailComponent';
import CompanyAddressComponent from '@/app/components/company/company-address/CompanyAddressComponent';

interface CompanyWithAddresses extends Company {
  addresses: Address[];
}

const getCompany = async (slug: string): Promise<CompanyWithAddresses> => {
  const data = await fetch(`http://localhost:3000/api/companies/${slug}`, {
    method: 'GET',
  });
  const company = await data.json();

  return company;
};

export default async function CompanyDetail() {
  const params = useParams();
  const company = await getCompany(params.slug);

  return (
    <main>
      <CompanyDetailComponent
        companyName={company.name}
        companyDesc={company.description}
      />
      <CompanyAddressComponent companyAddress={company.addresses} />
    </main>
  );
}

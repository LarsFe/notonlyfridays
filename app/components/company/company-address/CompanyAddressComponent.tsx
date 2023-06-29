import { Address } from '@prisma/client';

type CompanyAddressComponentProps = {
  companyAddress: Array<Address>;
};

export default async function CompanyAddressComponent(
  props: CompanyAddressComponentProps
) {
  const { companyAddress } = props;

  if (companyAddress.length > 1) {
    return (
      <ul>
        {companyAddress.map((address) => (
          <li key={address.id}>
            <address>
              {address.street} {address.house_number}
              <br />
              {address.zip_code} {address.city}
            </address>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div>
        {companyAddress.map((address) => (
          <address key={address.id}>
            {address.street} {address.house_number}
            <br />
            {address.zip_code} {address.city}
          </address>
        ))}
      </div>
    );
  }
}

type CompanyDetailComponentProps = {
  companyName: string;
  companyDesc: string;
};

export default async function CompanyDetailComponent(
  props: CompanyDetailComponentProps
) {
  const { companyName, companyDesc } = props;

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{companyDesc}</p>
    </div>
  );
}

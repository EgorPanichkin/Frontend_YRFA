import { ServiceListCard } from "@/shared";

export const TestPage = () => {
  const exampleData2 = {
    id: 2,
    diagnostic_name: null,
    subcategory_name: "Диагностические услуги",
    diagnostic_subcategory: [
      {
        id: 3,
        diagnostic_name: "УЗИ сердца",
      },
      {
        id: 4,
        diagnostic_name: "УЗИ брюшной полости",
      },
      {
        id: 5,
        diagnostic_name: "МРТ головы",
      },
    ],
  };
  return (
    <div>
      <ServiceListCard categoryList={exampleData2.diagnostic_subcategory} />
    </div>
  );
};

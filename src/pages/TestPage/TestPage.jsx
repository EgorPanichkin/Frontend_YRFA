import { LocationCard } from "@/shared";

const data = {
  id: 1,
  title: "Бишкек",
  image:
    "http://34.125.221.57:80/media/abstract_images/8e6e821692cce411dea42c702196daa7.jpg",
};

export const TestPage = () => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      <LocationCard data={data} />
    </div>
  );
};

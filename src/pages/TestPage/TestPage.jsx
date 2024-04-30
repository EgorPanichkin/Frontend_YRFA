import { PriceCard } from "@/shared";

export const TestPage = () => {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <PriceCard
        text="Прием (осмотр/консультация) акушера-гинеколога первичный"
        price={3700}
      />
      <PriceCard
        text="Прием (осмотр/консультация) акушера-гинеколога первичный"
        price={3700}
      />
      <PriceCard
        text="Прием (осмотр/консультация) акушера-гинеколога первичный"
        price={3700}
      />
      <PriceCard
        text="Прием (осмотр/консультация) акушера-гинеколога первичный"
        price={3700}
      />
      <PriceCard
        text="Прием (осмотр/консультация) акушера-гинеколога первичный"
        price={3700}
      />
    </div>
  );
};

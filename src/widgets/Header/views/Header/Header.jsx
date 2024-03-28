import { Line } from "@/shared";
import { HeaderBottom } from "../HeaderBottom";
import { HeaderTop } from "../HeaderTop";

export const Header = () => {
  return (
    <div>
      <HeaderTop />
      <Line color={"black100"} />
      <HeaderBottom />
    </div>
  );
};

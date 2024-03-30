import { Line, Typography } from "@/shared";
import style from "./FooterList.module.scss";
import { Link } from "react-router-dom";

export const FooterList = ({ title, data }) => {
  return (
    <div>
      <Typography variant="h5" color="white" weight="semibold">
        {title}
      </Typography>
      <Line color="blacklight" className={style.line} />
      <div>
        {data?.map((item, index) => {
          return (
            <Link to={item.path} key={index} className={style.link}>
              <Typography variant="a" color="white">
                {item.text}
              </Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

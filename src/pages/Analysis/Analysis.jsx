// import { useState } from 'react'
import style from "./Analysis.module.scss";
// import { useParams } from 'react-router-dom'
// import { baseGetRequest } from '@/shared/api/getResponce'
import { Typography } from "@/shared";

export const Analysis = () => {
  // Server Broken
  // const { analysSlug } = useParams()
  // console.log(analysSlug)

  // useEffect(() => {
  //   return async () => {
  //     const response = await baseGetRequest(`/servises/analysis/${analysSlug}`)
  //     setServerData(response)
  //   }
  // }, [analysSlug])

  // const [display, setDisplay] = useState('discription')

  const responce = {
    header: "Общий анализ крови (венозная кровь,СОЭ по Вестергрену)",
    discription:
      "Lorem ipsum dolor sit amet consectetur. Enim venenatis massa mattis lectus volutpat gravida. Netus felis pellentesque interdum lectus. Pellentesque suspendisse nec vel leo eu pharetra diam donec hac. Nec iaculis bibendum pellentesque mi sapien a. Cras tincidunt turpis tortor purus porttitor. Est vulputate ut suspendisse fringilla ut commodo nulla tempor cursus. Tincidunt gravida scelerisque pretium maecenas massa. Dictum non nulla ultricies morbi mi scelerisque odio pulvinar neque. Convallis egestas aenean est donec ipsum vel urna. Mi tellus egestas a mauris. Vel ullamcorper etiam nunc vel purus suspendisse ornare. Id gravida sed eu mollis quis sed. Proin pretium maecenas tempor varius. Sapien amet sed volutpat semper commodo mauris orci morbi. Amet nulla quam feugiat non phasellus risus consectetur. Tellus vitae curabitur tortor.",
    preparation:
      "Lorem ipsum dolor sit amet consectetur. Enim venenatis massa mattis lectus volutpat gravida. Netus felis pellentesque interdum lectus. Pellentesque suspendisse nec vel leo eu pharetra diam donec hac. Nec iaculis bibendum pellentesque mi sapien a. Cras tincidunt turpis tortor purus porttitor. Est vulputate ut suspendisse fringilla ut commodo nulla tempor cursus. Tincidunt gravida scelerisque pretium maecenas massa. Dictum non nulla ultricies morbi mi scelerisque odio pulvinar neque. Convallis egestas aenean est donec ipsum vel urna. Mi tellus egestas a mauris. Vel ullamcorper etiam nunc vel purus suspendisse ornare. Id gravida sed eu mollis quis sed. Proin pretium maecenas tempor varius. Sapien amet sed volutpat semper commodo mauris orci morbi. Amet nulla quam feugiat non phasellus risus consectetur. Tellus vitae curabitur tortor.",
    carrying:
      "Lorem ipsum dolor sit amet consectetur. Enim venenatis massa mattis lectus volutpat gravida. Netus felis pellentesque interdum lectus. Pellentesque suspendisse nec vel leo eu pharetra diam donec hac. Nec iaculis bibendum pellentesque mi sapien a. Cras tincidunt turpis tortor purus porttitor. Est vulputate ut suspendisse fringilla ut commodo nulla tempor cursus. Tincidunt gravida scelerisque pretium maecenas massa. Dictum non nulla ultricies morbi mi scelerisque odio pulvinar neque. Convallis egestas aenean est donec ipsum vel urna. Mi tellus egestas a mauris. Vel ullamcorper etiam nunc vel purus suspendisse ornare. Id gravida sed eu mollis quis sed. Proin pretium maecenas tempor varius. Sapien amet sed volutpat semper commodo mauris orci morbi. Amet nulla quam feugiat non phasellus risus consectetur. Tellus vitae curabitur tortor.",
    results:
      "Lorem ipsum dolor sit amet consectetur. Enim venenatis massa mattis lectus volutpat gravida. Netus felis pellentesque interdum lectus. Pellentesque suspendisse nec vel leo eu pharetra diam donec hac. Nec iaculis bibendum pellentesque mi sapien a. Cras tincidunt turpis tortor purus porttitor. Est vulputate ut suspendisse fringilla ut commodo nulla tempor cursus. Tincidunt gravida scelerisque pretium maecenas massa. Dictum non nulla ultricies morbi mi scelerisque odio pulvinar neque. Convallis egestas aenean est donec ipsum vel urna. Mi tellus egestas a mauris. Vel ullamcorper etiam nunc vel purus suspendisse ornare. Id gravida sed eu mollis quis sed. Proin pretium maecenas tempor varius. Sapien amet sed volutpat semper commodo mauris orci morbi. Amet nulla quam feugiat non phasellus risus consectetur. Tellus vitae curabitur tortor.",
  };

  return (
    <div className={style.analysis}>
      <div className={style.analysInfo}>
        <Typography variant="h3" weight="bold">
          {responce.header}
        </Typography>
        <div>
          <button value={"discription"}>Описание</button>
          <button value={"preparation"}>Подготовка</button>
          <button value={"carrying"}>Проведение</button>
          <button value={"results"}>Результаты</button>
        </div>
        <div>
          <Typography variant="body" className={style.activeText}>
            {responce.discription}
          </Typography>
          <Typography variant="body" className={style.text}>
            {responce.preparation}
          </Typography>
          <Typography variant="body" className={style.text}>
            {responce.carrying}
          </Typography>
          <Typography variant="body" className={style.text}>
            {responce.results}
          </Typography>
        </div>
      </div>
    </div>
  );
};

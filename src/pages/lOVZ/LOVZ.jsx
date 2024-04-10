import { BodyLovz, ReusedHero } from "@/widgets";
import imageLOVZ from "@/shared/assets/images/lovz/imgLOVZ.webp";

export const LovzPage = () => {
  return (
    <>
      <ReusedHero
        textButton="Запись а прием"
        title="Заголовок"
        body="Lorem ipsum dolor sit amet consectetur. Porta nibh tellus at id viverra nunc sed nascetur tempor. Bibendum nec dignissim in ultrices mauris id. Facilisi vulputate massa ut sed nisl suspendisse. Posuere amet id dapibus proin. Aliquam lobortis sed odio scelerisque fusce nulla at. Vel facilisi sit nulla orci nisl fermentum sed. Lacus est accumsan eu adipiscing in leo aliquam ipsum. Accumsan augue quis dolor a proin. Molestie vulputate pulvinar placerat egestas molestie quis elementum praesent eleifend. Pellentesque dui vitae amet ornare. Etiam lacus molestie pellentesque eu neque ullamcorper feugiat duis mauris. Tellus nec gravida ullamcorper eget proin faucibus. Risus in pharetra suscipit tempor platea. Scelerisque faucibus tortor consectetur leo commodo turpis nulla."
        img={imageLOVZ}
      />
      <BodyLovz />
    </>
  );
};

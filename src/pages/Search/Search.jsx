import style from "./Search.module.scss";
import { Container, SearchInput, Typography, TabSelectButton } from "@/shared";
import { useState, useEffect } from "react";
import { SearchPrice, SearchServices } from "@/widgets";
import { useDispatch, useSelector } from "react-redux";
import { searchResults, selectSearchResults } from "@/app/store/searchSlice";
import { LoaderPage } from "..";

export const Search = () => {
  const [allResults, setAllResults] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [countDataServices, setCountDataServices] = useState(0);
  const [countDataPrice, setCountDataPrice] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector(selectSearchResults);
  const loading = useSelector((state) => state.search.loading);

  useEffect(() => {
    dispatch(searchResults());
  }, [dispatch]);
  const isAllEmpty = Object.values(data).every(
    (arr) => Array.isArray(arr) && arr.length === 0,
  );
  const handleCountDataServices = (count) => {
    setCountDataServices(count);
  };

  const handleCountDataPrice = (count) => {
    setCountDataPrice(count);
  };

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const showAllResults = () => {
    setActiveSection(null);
  };

  useEffect(() => {
    setAllResults(countDataPrice + countDataServices);
  }, [countDataPrice, countDataServices]);

  const filteredData = Object.entries(data)
    // eslint-disable-next-line no-unused-vars
    .filter(([key, value]) => Array.isArray(value) && value.length > 0)
    // eslint-disable-next-line no-unused-vars
    .reduce((acc, [key, value]) => {
      const newData = value.map((obj, index) => ({
        ...obj,
        id: acc.length + index + 1,
      }));
      return [...acc, ...newData];
    }, [])
    .map((item) => {
      const { analyse_name, diagnostic_name, title, ...rest } = item;
      return {
        ...rest,
        title: diagnostic_name || analyse_name || title,
      };
    });
  const filteredDataWithPrice = filteredData.filter((obj) => "price" in obj);

  if (loading) {
    return (
      <div className={style.loader}>
        <LoaderPage />
      </div>
    );
  }

  return (
    <Container>
      <div className={style.searchTitle}>
        <Typography variant="h2" weight="bold">
          Результаты поиска
        </Typography>
        <SearchInput size="big" />
        {isAllEmpty ? (
          <div className={style.nothing}>
            <Typography variant="h3" weight="bold">
              упс ничего не найдено
            </Typography>
          </div>
        ) : (
          <div className={style.anchorBlock}>
            <Typography weight="bold">
              Найдено<span className={style.resultsText}> {allResults} </span>
              результатов
            </Typography>
            <div className={style.buttonAnchor}>
              <TabSelectButton
                onClick={showAllResults}
                active={activeSection === null ? true : false}
              >
                Все результаты
              </TabSelectButton>
              <TabSelectButton
                onClick={() => toggleSection("services")}
                count={countDataServices}
                active={activeSection === "services" ? true : false}
              >
                Услуги
              </TabSelectButton>
              <TabSelectButton
                onClick={() => toggleSection("price")}
                count={countDataPrice}
                active={activeSection === "price" ? true : false}
              >
                Цены
              </TabSelectButton>
            </div>
          </div>
        )}
      </div>
      {!isAllEmpty && (
        <>
          {activeSection === "services" && (
            <SearchServices
              data={filteredData}
              dataCount={handleCountDataServices}
            />
          )}
          {activeSection === "price" && (
            <SearchPrice
              data={filteredDataWithPrice}
              dataCount={handleCountDataPrice}
            />
          )}
          {activeSection === null && (
            <div>
              <SearchServices
                data={filteredData}
                dataCount={handleCountDataServices}
              />
              <SearchPrice
                data={filteredDataWithPrice}
                dataCount={handleCountDataPrice}
              />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

import { createBrowserRouter } from "react-router-dom";

import {
  About,
  FAQ,
  Doctors,
  Analysis,
  LoginPage,
  SmsPage,
  VerificationPage,
  PasswordResetPage,
  Actual,
  News,
  PersonalAccountPage,
  PostHistoryPage,
  AnalysesHistoryPage,
  Vacancy,
  VacancyDetails,
  Directions,
  RehabilitationPage,
  NotFoundPage,
  WelcomePage,
  HomePage,
  AnalysisSelection,
  LovzPage,
  SelectDirectionPage,
  Charity,
  FinalServicePage,
  Article,
  RegisterPage,
  RegisterConfirmation,
  ErrorPage,
  Search,
  PersonalResetPage,
  CharityMoreDetails,
} from "@/pages";

import { Layout } from "../Layout/Layout";
import { PATHS, PrivateRoute, baseGetRequest } from "@/shared";

// FIX_ME
import { TestPage } from "@/pages/TestPage/TestPage";

export const router = createBrowserRouter([
  { path: "test/", element: <TestPage /> },
  {
    path: PATHS.welcome,
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATHS.home,
        element: <HomePage />,
        loader: async () => {
          const popular = await baseGetRequest("/servises/popular/");
          const categories = await baseGetRequest(
            "/servises/diagnostic-categories/",
          );
          const swiper = await baseGetRequest("/main/swiper/");
          const branches = await baseGetRequest("/main/filial/");
          const actual = await baseGetRequest("/main/sale/");
          return {
            popular: popular,
            categories: categories,
            swiper: swiper,
            branches: branches,
            actual: actual,
          };
        },
      },
      {
        path: PATHS.about,
        element: <About />,
        loader: async () => {
          const heroAbout = await baseGetRequest("/main/swiper/");
          const equipment = await baseGetRequest("/main/equipment/");
          const partners = await baseGetRequest("/main/our_partner/");
          const swiper = await baseGetRequest("/main/swiper/");
          return {
            heroAbout: heroAbout,
            equipment: equipment,
            partners: partners,
            swiper: swiper,
          };
        },
      },
      {
        path: PATHS.doctors,
        element: <Doctors />,
        loader: async () => {
          const articles = await baseGetRequest("/blogs/doctors_articles/");
          const events = await baseGetRequest("/blogs/events/");
          return { articles: articles, events: events };
        },
      },
      {
        path: PATHS.doctorsArticles,
        element: <Article />,
        loader: (loader) => {
          return baseGetRequest(
            `/blogs/${loader.params.type}/${loader.params.id}`,
          );
        },
      },

      {
        path: PATHS.FAQ,
        element: <FAQ />,
        loader: async () => {
          const questions = await baseGetRequest("/blogs/questionnaires/");
          const actual = await baseGetRequest("/main/sale/");
          return { questions: questions, actual: actual };
        },
      },
      {
        path: PATHS.rehabilitation,
        element: <RehabilitationPage />,
        loader: () => {
          return baseGetRequest("/servises/rehabilitations/");
        },
      },
      { path: PATHS.LOVZ, element: <LovzPage /> },
      {
        path: PATHS.directions,
        element: <Directions />,
        loader: async () => {
          const popular = await baseGetRequest("/servises/popular/");
          const categories = await baseGetRequest(
            "/servises/diagnostic-categories/",
          );
          const swiper = await baseGetRequest("/main/swiper/");
          const actual = await baseGetRequest("/main/sale/");
          return {
            popular: popular,
            categories: categories,
            swiper: swiper,
            actual: actual,
          };
        },
      },
      {
        path: `${PATHS.selectDirections}/:idCategory`,
        element: <SelectDirectionPage />,
        loader: async (loader) => {
          const category = await baseGetRequest(
            `/servises/diagnostic-categories/${loader.params.idCategory}`,
          );
          const services = await baseGetRequest("/servises/diagnostics/");
          const subCategorys = await baseGetRequest(
            "/servises/diagnostic-subcategories/",
          );
          return {
            category: category,
            services: services,
            subCategorys: subCategorys,
          };
        },
      },
      {
        path: `select-direction/:idCategory${PATHS.currentService}/:idService`,
        element: <FinalServicePage />,
        loader: async (loader) => {
          const main = await baseGetRequest(
            `/servises/diagnostics/${loader.params.idService}/`,
          );
          const actual = await baseGetRequest("/main/sale/");
          return { main, actual: actual };
        },
      },
      {
        path: PATHS.analysis,
        element: <Analysis />,
        loader: () => {
          return baseGetRequest("/servises/analyses/");
        },
      },
      {
        path: PATHS.selectAnalys,
        element: <AnalysisSelection />,
        loader: async (loader) => {
          const list = await baseGetRequest("/servises/analyses/");
          const info = await baseGetRequest(
            `/servises/analyses/${loader.params.id}`,
          );
          return { list: list, info };
        },
      },
      { path: PATHS.login, element: <LoginPage /> },
      { path: PATHS.registration, element: <RegisterPage /> },
      {
        path: PATHS.registrationPhoneConfirmation,
        element: <RegisterConfirmation />,
      },
      { path: PATHS.smsVerification, element: <SmsPage /> },
      { path: PATHS.verificationCode, element: <VerificationPage /> },
      { path: PATHS.passwordReset, element: <PasswordResetPage /> },
      {
        path: PATHS.personal,
        element: (
          <PrivateRoute>
            <PersonalAccountPage />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.postHistory,
        element: (
          <PrivateRoute>
            <PostHistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.analysHistory,
        element: (
          <PrivateRoute>
            <AnalysesHistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.personalReset,
        element: (
          <PrivateRoute>
            <PersonalResetPage />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.actual,
        element: <Actual />,
        loader: () => {
          return baseGetRequest("/main/sale/");
        },
      },
      {
        path: PATHS.news,
        element: <News />,
        loader: () => {
          return baseGetRequest("/blogs/articles/");
        },
      },
      {
        path: PATHS.newsArticle,
        element: <Article />,
        loader: (loader) => {
          return baseGetRequest(`/blogs/articles/${loader.params.id}`);
        },
      },
      {
        path: PATHS.charity,
        element: <Charity />,
        loader: async () => {
          const article = await baseGetRequest("/charity/articles/");
          const fund = await baseGetRequest("/charity/fund/");
          return { article: article, fund: fund };
        },
      },
      {
        path: PATHS.charityMoreDetails,
        element: <CharityMoreDetails />,
        loader: (loader) => {
          return baseGetRequest(`/charity/article/${loader.params.id}`);
        },
      },
      {
        path: PATHS.vacancy,
        element: <Vacancy />,
        loader: async () => {
          const vacancy = await baseGetRequest("/main/vacancy/");
          return { vacancy: vacancy };
        },
      },
      {
        path: PATHS.vacancyDetails,
        element: <VacancyDetails />,
        loader: (loader) => {
          return baseGetRequest(`/main/vacancy/${loader.params.id}`);
        },
      },
      {
        path: PATHS.search,
        element: <Search />,
        loader: () => {
          const urlParams = new URLSearchParams(window.location.search);
          const searchTerm = urlParams.get("q");
          return searchTerm;
        },
      },
      { path: PATHS.notFound, element: <NotFoundPage /> },
    ],
  },
]);

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
  Directions,
  RehabilitationPage,
  NotFoundPage,
  WelcomePage,
  HomePage,
  AnalysisSelection,
  LovzPage,
  SelectDirectionPage,
  Charity,
  CharityMoreDetails,
  FinalServicePage,
  Article,
  RegisterPage,
  RegisterConfirmation,
  ErrorPage,
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
            popular: popular.results,
            categories: categories.results,
            swiper: swiper.results,
            branches: branches.results,
            actual: actual.results,
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
          return {
            heroAbout: heroAbout.results,
            equipment: equipment.results,
            partners: partners.results,
          };
        },
      },
      {
        path: PATHS.doctors,
        element: <Doctors />,
        loader: async () => {
          const articles = await baseGetRequest("/blogs/doctors_articles/");
          const events = await baseGetRequest("/blogs/events/");
          return { articles: articles.results, events: events.results };
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
        loader: () => {
          return baseGetRequest("/main/swiper/");
        },
      },
      { path: PATHS.rehabilitation, element: <RehabilitationPage /> },
      { path: PATHS.LOVZ, element: <LovzPage /> },
      {
        path: PATHS.directions,
        element: <Directions />,
        loader: async () => {
          const popular = await baseGetRequest("/servises/popular/");
          const categories = await baseGetRequest(
            "/servises/diagnostic-categories/",
          );
          return { popular: popular.results, categories: categories.results };
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
            services: services.results,
            subCategorys: subCategorys.results,
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
          return { main, actual: actual.results };
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
          return { list: list.results, info };
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
        path: PATHS.actual,
        element: <Actual />,
        loader: () => {
          return baseGetRequest("/main/sale/");
        },
      },
      {
        path: PATHS.news,
        element: <News />,
        loader: async () => {
          const blogArticle = await baseGetRequest("/blogs/articles/");
          return { blogArticle: blogArticle.results };
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
          return { article: article.results, fund: fund.results };
        },
      },
      {
        path: PATHS.charityMoreDetails,
        element: <CharityMoreDetails />,
        loader: async (loader) => {
          const articleMoreDetails = await baseGetRequest(
            `/charity/article/${loader.params.id}`,
          );
          return articleMoreDetails;
        },
      },
      {
        path: PATHS.vacancy,
        element: <Vacancy />,
        loader: async () => {
          const vacancy = await baseGetRequest("/main/vacancy/");
          return { vacancy: vacancy.results };
        },
      },
      { path: PATHS.notFound, element: <NotFoundPage /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import {
  About,
  FAQ,
  Doctors,
  Analysis,
  LoginPage,
  RegisterPage,
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
} from "@/pages";

import { Layout } from "../Layout/Layout";
import { PATHS, PrivateRoute, baseGetRequest } from "@/shared";
import { Article } from "@/pages/Article/Article";
import { FinalServicePage } from "@/pages/FinalServicePage/FinalServicePage";

export const router = createBrowserRouter([
  {
    path: PATHS.welcome,
    element: <WelcomePage />,
  },
  {
    element: <Layout />,
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
          return {
            popular: popular.results,
            categories: categories.results,
            swiper: swiper.results,
            branches: branches.results,
          };
        },
      },
      { path: PATHS.about, element: <About /> },
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
            `/blogs/${loader.params.type}/${loader.params.slug}`,
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
        loader: async () => {
          const services = await baseGetRequest("/servises/diagnostics/");
          const subCategorys = await baseGetRequest(
            "/servises/diagnostic-subcategories/",
          );
          return {
            services: services.results,
            subCategorys: subCategorys.results,
          };
        },
      },
      {
        path: "select-direction/:idCategory/current-service/:idService",
        element: <FinalServicePage />,
        loader: (loader) => {
          return baseGetRequest(
            `/servises/diagnostics/${loader.params.idService}/`,
          );
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
        loader: () => {
          return baseGetRequest("/servises/analyses/");
        },
      },
      { path: PATHS.login, element: <LoginPage /> },
      { path: PATHS.registration, element: <RegisterPage /> },
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
        loader: () => {
          return baseGetRequest("/blogs/articles/");
        },
      },
      {
        path: PATHS.newsArticle,
        element: <Article />,
        loader: (loader) => {
          return baseGetRequest(`/blogs/articles/${loader.params.slug}`);
        },
      },
      {
        path: PATHS.charity,
        element: <Charity />,
      },
      {
        path: PATHS.vacancy,
        element: <Vacancy />,
        loader: () => {
          return baseGetRequest("/main/vacancy");
        },
      },
      { path: PATHS.notFound, element: <NotFoundPage /> },
    ],
  },
]);

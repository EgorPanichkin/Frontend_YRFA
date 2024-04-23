import { createBrowserRouter } from "react-router-dom";

import {
  About,
  Diognostic,
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
          const services = await baseGetRequest("/servises/popular/");
          const treatment = await baseGetRequest(
            "/servises/treatment-categories/",
          );
          const swiper = await baseGetRequest("/main/swiper/");
          const branches = await baseGetRequest("/main/filial/");
          return {
            services: services.results,
            treatment: treatment.results,
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
      { path: PATHS.diognostic, element: <Diognostic /> },

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
          const services = await baseGetRequest("/servises/popular/");
          const treatment = await baseGetRequest(
            "/servises/treatment-categories/",
          );
          return { services: services.results, treatment: treatment.results };
        },
      },
      {
        path: `${PATHS.selectDirections}/:type/:id`,
        element: <SelectDirectionPage />,
        loader: async () => {
          return baseGetRequest("/servises/diagnostics/");
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

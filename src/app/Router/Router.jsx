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
      { path: PATHS.home, element: <HomePage /> },
      { path: PATHS.about, element: <About /> },
      { path: PATHS.doctors, element: <Doctors /> },
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
      { path: PATHS.FAQ, element: <FAQ /> },
      { path: PATHS.rehabilitation, element: <RehabilitationPage /> },
      { path: PATHS.LOVZ, element: <LovzPage /> },
      { path: PATHS.directions, element: <Directions /> },
      { path: PATHS.selectDirections, element: <SelectDirectionPage /> },
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
      { path: PATHS.vacancy, element: <Vacancy /> },
      { path: PATHS.notFound, element: <NotFoundPage /> },
    ],
  },
]);

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
} from "@/pages";

import { Layout } from "../Layout/Layout";
import { PATHS, baseGetRequest } from "@/shared";

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
      { path: PATHS.diognostic, element: <Diognostic /> },
      { path: PATHS.FAQ, element: <FAQ /> },
      { path: PATHS.rehabilitation, element: <RehabilitationPage /> },
      { path: PATHS.LOVZ, element: <LovzPage /> },
      { path: PATHS.directions, element: <Directions /> },
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
      { path: PATHS.personal, element: <PersonalAccountPage /> },
      { path: PATHS.postHistory, element: <PostHistoryPage /> },
      { path: PATHS.analysHistory, element: <AnalysesHistoryPage /> },
      {
        path: PATHS.actual,
        element: <Actual />,
        loader: () => {
          return baseGetRequest("/main/sale/");
        },
      },
      { path: PATHS.news, element: <News /> },
      { path: PATHS.vacancy, element: <Vacancy /> },
      { path: PATHS.notFound, element: <NotFoundPage /> },
    ],
  },
]);

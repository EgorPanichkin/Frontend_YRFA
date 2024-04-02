import { Route, Routes } from "react-router-dom";

import {
  About,
  Diognostic,
  FAQ,
  OurTeam,
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
  SelectDirectionPage,
  RehabilitationPage,
  NotFoundPage,
  WelcomePage,
  HomePage,
} from "@/pages";
import { Layout } from "../Layout/Layout";
import { PATHS } from "@/shared";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={PATHS.welcome} element={<WelcomePage />} />
        <Route path={PATHS.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.about} element={<About />} />
          <Route path={PATHS.ourTeam} element={<OurTeam />} />
          <Route path={PATHS.diognostic} element={<Diognostic />} />
          <Route path={PATHS.FAQ} element={<FAQ />} />
          <Route path={PATHS.rehabilitation} element={<RehabilitationPage />} />

          <Route path={PATHS.directions} element={<Directions />} />
          {/* <Route
            path="/:currentDirectionSelector"
            element={<SelectDirectionPage requestParameter="direction" />}
          /> */}
          {/* <Route path='/:currentDirectionSelector/:currentServiceInfo' element={<CurrentServicePage />} /> */}

          <Route
            path={PATHS.analysisSelector}
            element={<SelectDirectionPage requestParameter="analyses" />}
          />
          <Route path={PATHS.selectAnalys} element={<Analysis />} />

          <Route path={PATHS.login} element={<LoginPage />} />
          <Route path={PATHS.registration} element={<RegisterPage />} />
          <Route path={PATHS.smsVerification} element={<SmsPage />} />
          <Route path={PATHS.verificationCode} element={<VerificationPage />} />
          <Route path={PATHS.passwordReset} element={<PasswordResetPage />} />

          <Route path={PATHS.personal} element={<PersonalAccountPage />} />
          <Route path={PATHS.postHistory} element={<PostHistoryPage />} />
          <Route path={PATHS.analysHistory} element={<AnalysesHistoryPage />} />

          <Route path={PATHS.actual} element={<Actual />} />
          <Route path={PATHS.news} element={<News />} />
          <Route path={PATHS.vacancy} element={<Vacancy />} />
          <Route path={PATHS.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

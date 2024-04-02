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
  RehabilitationPage,
  NotFoundPage,
  WelcomePage,
  HomePage,
  AnalysisSelection,
} from "@/pages";
import { Layout } from "../Layout/Layout";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/diognostic" element={<Diognostic />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/rehabilitation" element={<RehabilitationPage />} />

          <Route path="/directions" element={<Directions />} />
          {/* <Route
            path="/:currentDirectionSelector"
            element={<SelectDirectionPage requestParameter="direction" />}
          /> */}
          {/* <Route path='/:currentDirectionSelector/:currentServiceInfo' element={<CurrentServicePage />} /> */}

          <Route path="/analysis" element={<Analysis />} />
          <Route path="/analysis/:id" element={<AnalysisSelection />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login/sms-verification" element={<SmsPage />} />
          <Route
            path="login/sms-verification/verification"
            element={<VerificationPage />}
          />
          <Route
            path="login/sms-verification/verification/password-reset"
            element={<PasswordResetPage />}
          />

          <Route path="personal-account" element={<PersonalAccountPage />} />
          <Route
            path="personal-account/post-history"
            element={<PostHistoryPage />}
          />
          <Route
            path="personal-account/analyses-history"
            element={<AnalysesHistoryPage />}
          />

          <Route path="/actual" element={<Actual />} />
          <Route path="/news" element={<News />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

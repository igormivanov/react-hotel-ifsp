import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BookingPage } from "./pages/Booking";
import { BookingLayout } from "./layouts/BookingLayout";
import { ConfirmPage } from "./pages/Booking/Confirm";
import { LoginPage } from "./pages/login";
import { AuthLayout } from "./layouts/AuthLayout";
import { RegisterPage } from "./pages/Register";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
      <Route path="/booking" element={<BookingLayout/>}>
        <Route index element={<BookingPage/>}/>
        <Route path="confirm" element={<ConfirmPage/>}/>
      </Route>
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}
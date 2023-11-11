import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BookingPage } from "./pages/Booking";
import { BookingLayout } from "./layouts/BookingLayout";
import { ConfirmPage } from "./pages/Booking/Confirm";
import { LoginPage } from "./pages/login";

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
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}
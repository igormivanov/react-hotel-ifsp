import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BookingPage } from "./pages/Booking";
import { BookingLayout } from "./layouts/BookingLayout";
import { ConfirmPage } from "./pages/Booking/Confirm";
import { LoginPage } from "./pages/login";
import { AuthLayout } from "./layouts/AuthLayout";
import { RegisterPage } from "./pages/Register";
import { EventPage } from "./pages/Private/Event";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { PrivateLayout } from "./layouts/PrivateLayout";
import { MyBookingPage } from './pages/Private/MyBookings/index';
import { ProfilePage } from "./pages/Private/Profile";


export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>

      <Route element={<BookingLayout/>}>
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/booking/confirm" element={<ConfirmPage/>}/> 
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>

      <Route element={<PrivateLayout/>}>
        <Route path="/guest/event" element={<RequireAuth><EventPage/></RequireAuth>}/>
        <Route path="/guest/booking" element={<RequireAuth><MyBookingPage/></RequireAuth>}/>
        <Route path="/guest/profile" element={<RequireAuth><ProfilePage/></RequireAuth>}/>
      </Route>

      <Route path="*"  element={<Navigate to="/" />} />
    </Routes>
  )
}
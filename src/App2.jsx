import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RealEstatePage from "./pages/RealEstatePage";
import ItSolutionsPage from "./pages/ItSolutionsPage";
import ContactUsPage from "./pages/ContactUsPage";
import RootLayout from "./layout/RootLayout";

function App2() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="real-estate" element={<RealEstatePage />} />
        <Route path="it-solutions" element={<ItSolutionsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
      </Route>
    )
  );

  return(
    <RouterProvider router={router} />
  )
}

export default App2;

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import { v4 } from "uuid";

const routeList = [
  {
    path: "/",
    element: MainPage,
  },
  {
    path: "/compcat",
    element: CompCatalog,
  },
];

const Root = () => {

  return (
    <>
      <Routes>
        {routeList.map((item, idx) => {
          return (
            <Route key={v4()} path={item.path} element={<item.element />} />
          );
        })}

      </Routes>
    </>
  );
};

export default Root;

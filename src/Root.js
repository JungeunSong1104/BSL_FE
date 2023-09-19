import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 } from "uuid";
import routeList from "./rootRouters";

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

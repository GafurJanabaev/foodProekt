import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RoutesData } from "./utils/routes.data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {RoutesData.map((item) => {
          return <Route path={item.path} element={<item.element />} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;

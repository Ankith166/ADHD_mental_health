import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Applayout from "./pages/Applayout";
import Quiz from "./pages/Quiz";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import Gamesapp from "./games_src/Gamesapp";
import Signup from "./pages/Signup";
function App() {
  const [data, setdata] = useState([]);
  const [cdata, setcdata] = useState([]);
  const [username, setusername] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="contact" element={<Pricing />} />
          <Route path="login" element={<Login setusername={setusername} />} />
          <Route path="signup" element={<Signup setusername={setusername} />} />
          <Route
            path="quiz"
            element={<Quiz data={data} setdata={setdata} username={username} />}
          />
          <Route
            path="app"
            element={
              <Applayout
                data={data}
                cdata={cdata}
                username={username}
                setcdata={setcdata}
                setdata={setdata}
              />
            }
          >
            {/* <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} /> */}
          </Route>
          <Route
            path="games"
            element={
              <Gamesapp
                setcdata={setcdata}
                data={data}
                username={username}
                setdata={setdata}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

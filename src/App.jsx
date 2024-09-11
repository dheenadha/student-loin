import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import StudentLogin from "./StudentLogin";
import Qusten from "./Qusten";
import Mark from "./Mark";
export default function App() {
  return (
<>
<BrowserRouter>
<Routes>
 <Route path="/" element={<Login />} />
  <Route path="/studlog" element={<StudentLogin />} />
  <Route path="/studqus" element={<Qusten/>}/>
  <Route path="/final" element={<Mark/>}/>

</Routes>
</BrowserRouter>
</>
  );
}

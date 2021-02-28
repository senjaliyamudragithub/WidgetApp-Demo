import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:300,500,700"],
  },
});
function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;

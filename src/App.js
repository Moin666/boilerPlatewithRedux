import { Provider } from "react-redux";
import ResponsiveAppBar from "./components/minavbar";
import Routing from "./confiq/routing/routing";
import { store } from "./confiq/Store/configureStore";

import InstituteForm from "./pages/institue";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <ResponsiveAppBar/> */}
        <Routing />
      </Provider>
    </div>
  );
}

export default App;

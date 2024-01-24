import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;

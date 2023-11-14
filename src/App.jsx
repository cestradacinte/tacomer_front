import { Navigation } from "./routes/index";
import { AuthProvider } from "./utils/context";

import "./App.scss";
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}

export default App;

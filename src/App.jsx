import "./App.css";

import { useLanguageContext } from "./context/LanguageContext";
function App() {
  const { t } = useLanguageContext();
  return (
    <div className="App">
      <h1>{t("line1")}</h1>
      <h1>{t("line2")}</h1>
    </div>
  );
}

export default App;
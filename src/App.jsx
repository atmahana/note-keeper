import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import ThemeContextProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="flex flex-col h-screen relative">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;

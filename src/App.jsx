import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import ThemeContextProvider from "./context/ThemeProvider";
import NoteProvider from "./context/Notes/NoteProvider";

function App() {
  return (
    <ThemeContextProvider>
      <NoteProvider>
        <div className="flex flex-col h-screen relative">
          <Header />
          <Content />
          <Footer />
        </div>
      </NoteProvider>
    </ThemeContextProvider>
  );
}

export default App;

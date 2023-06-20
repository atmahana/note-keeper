import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import ThemeContextProvider from "./context/ThemeProvider";
import NoteProvider from "./context/Notes/NoteProvider";
import ModalProvider from "./context/ModalProvider";

function App() {
  return (
    <ThemeContextProvider>
      <NoteProvider>
        <ModalProvider>
          <div className="flex flex-col h-screen relative">
            <Header />
            <Content />
            <Footer />
          </div>
        </ModalProvider>
      </NoteProvider>
    </ThemeContextProvider>
  );
}

export default App;

import "./style/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation"
import Main from "./Components/Main";
import Footer from "./Components/Footer"
function App() {
  return (
   <>
   <nav>
    <Navigation/>
   </nav>
   <main>
    <Main/>
   </main>
   <footer>
    <Footer/>
   </footer>
   </>
  );
}

export default App;

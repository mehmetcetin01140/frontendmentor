import "./style/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation"
import Main from "./Components/Main";
function App() {
  return (
   <>
   <nav>
    <Navigation/>
   </nav>
   <main>
    <Main/>
   </main>
   </>
  );
}

export default App;

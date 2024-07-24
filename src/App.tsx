import { Route } from "wouter"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"

const App = () => {
  return (
    <>
    <Header/>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    </>
  )
}

export default App

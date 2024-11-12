import Achievements from "./Components/Achievements/Achievements"
import Collection from "./Components/Collection/Collection"
import First from "./Components/First/First"
import Insights from "./Components/Insights/Insights"
import Nyus from "./Components/Nyus/Nyus"
import Navbar from "./Components/Navbar/Navbar"
import Next from "./Components/Next/Next"
import Story from "./Components/Story/Story"
import Footer from "./Components/Footer/Footer"
import Services from "./Components/Services/Services"




const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Next/>
      <First/>
      <Collection/>
      <Story/>
      <Achievements/>
      <Services/>
      <Insights/>
      <Nyus/>
      <Footer/>
      </div>
  )
}

export default App


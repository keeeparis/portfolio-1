import Navigation from "./components/Navigation"
import Social from "./components/Social"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
    return (
        <div className="wrapper">
            <div className="App">
                <div className="inner">
                    <div className="image">
                        <img 
                            src="https://images.squarespace-cdn.com/content/v1/59d7f37db0786914356e6127/2b39ea8a-96d9-4524-9c0a-11d6fadc3c86/MR-OG-LOGO-FINAL-retraced-original-EXTENDED-R-FINAL_small.jpg?format=750w" 
                            alt="Maggie" 
                        />
                    </div>
                    
                    <Navigation />
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default App

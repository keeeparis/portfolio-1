import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
} from 'react-router-dom'

const App = lazy(() => import('./App'))
const Join = lazy(() => import('./pages/Join'))
const Redirect = lazy(() => import('./pages/Redirect'))

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename={import.meta.env.VITE_DOMAIN}>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/join' element={<Join />}></Route>
                    <Route path='/rickroll' element={<Redirect link={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />}></Route>
                    <Route path='/spotify' element={<Redirect link={'https://open.spotify.com/'} />}></Route>
                    <Route path='/ebay' element={<Redirect link={'https://www.ebay.com/'} />}></Route>
                </Routes>
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
} from 'react-router-dom'

import App from './App'
import Join from './pages/Join'
import Redirect from './pages/Redirect'

// const App = lazy(() => import('./App'))
// const Join = lazy(() => import('./pages/Join'))
// const Redirect = lazy(() => import('./pages/Redirect'))

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/join' element={<Join />}></Route>
                    <Route path='/rickroll' element={<Redirect link={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />}></Route>
                </Routes>
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)

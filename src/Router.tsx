import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SignIn } from './pages/SignIn';
import { CreateCount } from './pages/CreateCount';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/authSignIn' element={<SignIn />} /> 
            <Route path='/createCount' element={<CreateCount />} />
        </Routes>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            Navbar
            <Routes>
                <Route exact path='/' element='' />
                <Route path='/video/:id' element='' />
                <Route path='/channel/:id' element='' />
                <Route path='/search/:searchTerm' element='' />
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App

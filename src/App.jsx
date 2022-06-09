import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Counter} from "@/features/counter/Counter";
import {Box, Container, Typography} from "@mui/material";

function App() {

  return (
    <div className="App">
        {/*redux test*/}
      <Counter />
        {/*mui test*/}
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Vite.js example
                </Typography>
            </Box>
        </Container>
    </div>
  )
}

export default App

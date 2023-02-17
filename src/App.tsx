import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';

const client = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
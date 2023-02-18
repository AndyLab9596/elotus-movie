import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieInfoPage from './pages/MovieInfo';
import useOnline from './hooks/useOnline';
import { OffLineScreen } from './components';
import { AppProvider } from './context/AppContext';

const client = new QueryClient();

const App = () => {

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <OffLineScreen />
    )
  }

  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-info/:id" element={<MovieInfoPage />} />
        </Routes>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
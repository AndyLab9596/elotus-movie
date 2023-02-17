import { useState } from 'react';
import { Header } from '../../components'

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <main className="relative h-screen overflow-y-scroll" onScroll={() => { }}>
      <Header setQuery={setQuery} />

    </main>
  )
}

export default HomePage
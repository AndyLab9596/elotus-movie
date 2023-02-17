import { useState } from 'react';
import { useFetchMovies } from '../../api/fetchHooks';
import { Header, Hero } from '../../components'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

const HomePage = () => {
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);
  const heroPageData = data?.pages[0].results[0];
  console.log('heroPageData', heroPageData);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Something went wrong</div>

  return (
    <main className="relative h-screen overflow-y-scroll" onScroll={() => { }}>
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={heroPageData?.backdrop_path
            ? IMAGE_BASE_URL + BACKDROP_SIZE + heroPageData?.backdrop_path : '/no_image.jpg'}
          title={heroPageData?.title ? heroPageData.title : ''}
          text={heroPageData?.overview ? heroPageData.overview : ''
          }
        />
      ) : null}

    </main>
  )
}

export default HomePage
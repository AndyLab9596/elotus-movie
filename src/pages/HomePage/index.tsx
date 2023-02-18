import { useState } from 'react';
import { useFetchMovies } from '../../api/fetchHooks';
import { Card, Grid, Header, Hero, Spinner } from '../../components'
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { useNavigate } from 'react-router-dom';
import NoImage from '../../assets/no_image.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);
  const heroPageData = data?.pages[0].results[0];

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Something went wrong</div>

  return (
    <main className="relative h-screen overflow-y-scroll" onScroll={handleScroll}>
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={heroPageData?.backdrop_path
            ? IMAGE_BASE_URL + BACKDROP_SIZE + heroPageData?.backdrop_path : NoImage}
          title={heroPageData?.title ? heroPageData.title : ''}
          text={heroPageData?.overview ? heroPageData.overview : ''
          }
        />
      ) : null}
      <Grid
        className="p-4 max-w-7xl m-auto py-32"
        title={query ? `Search Results: ${data?.pages[0].total_results}` : 'Now Playing Movies'}
        isHaveSwitch
      >
        {data && data.pages ? data.pages.map((page) => page.results.map((movie) => (
          <div key={movie.id} onClick={() => navigate(`/movie-info/${movie.id}`)}>
            <div className="cursor-pointer hover:opacity-80 duration-300">
              <Card
                imgUrl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                title={movie.title}
                overview={movie.overview}
                year={movie.release_date}
                rating={movie.vote_average}
              />
            </div>
          </div>
        ))) : null}
      </Grid>
      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  )
}

export default HomePage
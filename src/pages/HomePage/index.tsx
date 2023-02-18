import { useCallback, useEffect, useRef, useState } from 'react';
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

  const [startPoint, setStartPoint] = useState(0);
  const [pullChange, setPullChange] = useState<number | undefined>();
  const refreshCont = useRef<any>(0);
  const initLoading = () => {
    refreshCont.current.classList.add("loading");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  const pullStart = (e: TouchEvent) => {
    const { screenY } = e.targetTouches[0];
    setStartPoint(screenY);
  };
  const pull = useCallback((e: TouchEvent) => {
    /**
     * get the current user touch event data
     */
    const touch = e.targetTouches[0];
    /**
     * get the touch position on the screen's Y axis
     */
    const { screenY } = touch;
    /**
     * The length of the pull
     *
     * if the start touch position is lesser than the current touch position, calculate the difference, which gives the `pullLength`
     *
     * This tells us how much the user has pulled
     */
    let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
    setPullChange(pullLength);
    console.log({ screenY, startPoint, pullLength, pullChange });
  }, [pullChange, startPoint]);

  const endPull = useCallback((e: TouchEvent) => {
    setStartPoint(0);
    setPullChange(0);
    if (pullChange as number > 220) initLoading();
  },[pullChange]);
  // add and remove event listeners
  useEffect(() => {
    window.addEventListener("touchstart", pullStart);
    window.addEventListener("touchmove", pull);
    window.addEventListener("touchend", endPull);
    return () => {
      window.removeEventListener("touchstart", pullStart);
      window.removeEventListener("touchmove", pull);
      window.removeEventListener("touchend", endPull);
    };
  }, [endPull, pull]);


  if (error) return <div>Something went wrong</div>
  return (
    <main className="relative h-screen overflow-y-scroll" onScroll={handleScroll} ref={refreshCont} style={{ marginTop: pullChange as number / 3.118 || "" }}>
      <div className={`refresh-icon p-2 rounded-full absolute top-1/2 w-full z-10 left-1/2 -translate-x-5 ${startPoint ? 'block' : 'hidden'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 `}
          style={{ transform: `rotate(${pullChange}deg)`, }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
      <Header setQuery={setQuery} />
      {
        !query && data && data.pages ? (
          <Hero
            imgUrl={heroPageData?.backdrop_path
              ? IMAGE_BASE_URL + BACKDROP_SIZE + heroPageData?.backdrop_path : NoImage}
            title={heroPageData?.title ? heroPageData.title : ''}
            text={heroPageData?.overview ? heroPageData.overview : ''
            }
          />
        ) : null
      }
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
    </main >
  )
}

export default HomePage
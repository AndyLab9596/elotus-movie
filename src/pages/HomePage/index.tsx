import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchMovies } from '../../api/fetchHooks';
import NoImage from '../../assets/no_image.jpg';
import { Card, ErrorDisplay, Grid, Header, Hero, Spinner } from '../../components';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { useAppContext } from '../../context/AppContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { modeMovieFetching } = useAppContext();
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error, isFetchingNextPage, hasNextPage } = useFetchMovies(query, modeMovieFetching);
  const heroPageData = data?.pages[0].results[0];

  const intObserver = useRef<IntersectionObserver | undefined>(undefined);
  const lastMovieRef = useCallback((movie: any) => {
    if (isFetchingNextPage) return;
    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        console.log('We are near the last post!')
        fetchNextPage()
      }
    }, {
      threshold: 1,
      rootMargin: '100px'
    })

    if (movie) intObserver.current.observe(movie)

  }, [isFetchingNextPage, fetchNextPage, hasNextPage])

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
  }, [startPoint]);

  const endPull = useCallback((e: TouchEvent) => {
    setStartPoint(0);
    setPullChange(0);
    if (pullChange as number > 220) initLoading();
  }, [pullChange]);
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


  if (error) {
    return (
      <ErrorDisplay error={error as Error} />
    )
  }

  return (
    <main className="relative h-screen overflow-y-scroll" ref={refreshCont} style={{ marginTop: pullChange as number / 3.118 || "" }}>
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
        className="p-4 max-w-7xl m-auto py-8 md:py-12"
        title={query ? `Search Results: ${data?.pages[0].total_results}` : ''}
        isHaveSwitch
      >
        {data && data.pages ? data.pages.map((page) => page.results.map((movie, i) => {
          if (page.results.length === i + 1) {
            return (
              <div key={movie.id} onClick={() => navigate(`/movie-info/${movie.id}`)}>
                <div className="cursor-pointer hover:opacity-80 duration-300">
                  <Card
                    key={movie.id}
                    imgUrl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                    title={movie.title}
                    overview={movie.overview}
                    year={movie.release_date}
                    rating={movie.vote_average}
                    ref={lastMovieRef}
                  />
                </div>
              </div>
            )
          }
          return (
            <div key={movie.id} onClick={() => navigate(`/movie-info/${movie.id}`)}>
              <div className="cursor-pointer hover:opacity-80 duration-300">
                <Card
                  key={movie.id}
                  imgUrl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                  title={movie.title}
                  overview={movie.overview}
                  year={movie.release_date}
                  rating={movie.vote_average}
                />
              </div>
            </div>
          )
        })) : null}
      </Grid>
      {isLoading || isFetching ? <Spinner /> : null}
    </main >
  )
}

export default HomePage
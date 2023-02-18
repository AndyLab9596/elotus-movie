import { useFetchMovieInfo } from '../../api/fetchHooks';
import { Breadcrumb, Card, ErrorDisplay, Grid, Header, SingleMovieInfo, SingleMovieSkeleton } from '../../components';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../assets/no_image.jpg'

const MovieInfoPage = () => {
  const { movieInfo, loading, error } = useFetchMovieInfo();

  if (error) {
    return (
      <ErrorDisplay error={error} />
    )
  }

  if (loading) {
    return (
      <SingleMovieSkeleton />
    )
  }

  if (movieInfo?.cast && movieInfo.directors && movieInfo.movie) {
    const { cast, directors, movie } = movieInfo;

    return (
      <main>
        <Header />
        <Breadcrumb title={movie.original_title} />
        <SingleMovieInfo
          thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
          rating={movie.vote_average}
          year={movie.release_date.split('-')[0]}
          backgroundImgUrl={movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : NoImage}
          title={movie.original_title}
          budget={movie.budget}
          summary={movie.overview}
          directors={directors}
          time={movie.runtime}
          revenue={movie.revenue}
        />
        <Grid className='p-4 max-w-7xl m-auto' title='Actors' >
          {cast.map((actor) => (
            <Card
              key={actor.credit_id}
              imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : NoImage}
              title={actor.name}
              subtitle={actor.character}
            />
          ))}
        </Grid>
      </main>
    )
  }

  return null;


}

export default MovieInfoPage
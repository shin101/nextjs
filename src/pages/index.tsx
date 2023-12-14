import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

interface MovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="text-center">
      <Seo title="Home" />
      {results?.map((movie: MovieProps) => (
        <Link href={`/movies/${movie.original_title}`} key={movie.id}>
          <div
            key={movie.id}
            className="inline-block"
            onClick={() => onClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie img"
              width="180"
              height="250"
            />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

// this function should return an object
// server side rendering - user will see a blank screen while the site loads and see everything all at once whereas with react you could see a 'loading' page
export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

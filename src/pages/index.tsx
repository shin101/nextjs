import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../../components/Seo";

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
  return (
    <div className="text-center">
      <Seo title="Home" />

      {results?.map((movie: MovieProps) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
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

import { useRouter } from "next/router";
import React from "react";
import Seo from "../../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: { params },
  };
};

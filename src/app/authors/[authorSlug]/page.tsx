"use client";
import AuthorPage from "@/components/templates/AuthorPage";
import { AuthorInterface } from "@/contracts/interfaces";
import { GET_AUTHOR_INFO } from "@/graphQl/queries";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";

const Author: NextPage<AuthorInterface> = ({ params }) => {
  const { authorSlug } = params;
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: authorSlug },
  });
  if (error) return <h1>error ...</h1>;
  console.log(data);
  return <AuthorPage {...data?.author} loading={loading} />;
};

export default Author;

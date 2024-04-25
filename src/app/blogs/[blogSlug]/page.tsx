"use client";
import BlogPage from "@/components/templates/BlogPage";
import { BlogInterface } from "@/contracts/interfaces";
import { GET_BLOG_INFO } from "@/graphQl/queries";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";

const Blog: NextPage<BlogInterface> = ({ params }) => {
  const { blogSlug } = params;
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug: blogSlug },
  });
  if (error) return <h1>مشکلی پیش آمده دوباره تلاش کنید</h1>;
  return <BlogPage {...data?.post} loading={loading} />;
};

export default Blog;

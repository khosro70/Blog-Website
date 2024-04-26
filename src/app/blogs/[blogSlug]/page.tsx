"use client";
import Loader from "@/components/shared/Loader";
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
  console.log(data);
  if (error) return <h1>مشکلی پیش آمده دوباره تلاش کنید</h1>;

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
          }}
        >
          <Loader height="40" width="40" />
        </div>
      ) : (
        <BlogPage {...data?.post} loading={loading} slug={blogSlug} />
      )}
    </>
  );
};

export default Blog;

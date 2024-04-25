"use client";
import CardEL from "@/components/shared/CardEL";
import Loader from "@/components/shared/Loader";
import { postInterface } from "@/contracts/interfaces";
import { GET_BLOGS_INFO } from "@/graphQl/queries";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";

const Blogs: React.FC = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (error) return <h2>مشکلی پیش آمده دوباره تلاش کنید</h2>;
  return (
    <Grid container spacing={2}>
      {loading ? (
        <Grid item xs={12} display="flex" justifyContent="center">
          <Loader height="40" width="40" />
        </Grid>
      ) : (
        data?.posts?.map((post: postInterface) => (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <CardEL {...post} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Blogs;

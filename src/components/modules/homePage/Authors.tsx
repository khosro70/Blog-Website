"use client";
import Loader from "@/components/shared/Loader";
import { authorInterface } from "@/contracts/interfaces";
import { GET_AUTHORS_INFO } from "@/graphQl/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Oval } from "react-loader-spinner";

const Authors: React.FC = () => {
  const router = useRouter();
  const clickHandler = (slug: string) => {
    router.push(`/authors/${slug}`);
  };

  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (error) return <h1>مشکلی پیش آمده دوباره تلاش کنید</h1>;

  return (
    <Grid
      container
      sx={
        loading
          ? {}
          : {
              boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
              borderRadius: "4px",
            }
      }
    >
      {loading ? (
        <Grid item xs={12} display="flex" justifyContent="center">
          <Loader height="40" width="40" />
        </Grid>
      ) : (
        data?.authors?.map((author: authorInterface, index: number) => (
          <React.Fragment key={author.id}>
            <Grid
              item
              xs={12}
              padding={1}
              display="flex"
              alignItems="center"
              justifyContent="start"
              sx={{ cursor: "pointer" }}
              onClick={() => clickHandler(author.slug)}
            >
              <Avatar src={author.avatar.url} />
              <Typography
                component="p"
                variant="body2"
                color="text.secondary"
                paddingRight={3}
              >
                {author.name}
              </Typography>
            </Grid>
            {index !== data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))
      )}
    </Grid>
  );
};

export default Authors;

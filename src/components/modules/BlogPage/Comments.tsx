"use client";
import {
  CommentsPropsInterface,
  commentInterface,
} from "@/contracts/interfaces";
import { GET_POST_COMMENTS } from "@/graphQl/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const Comments: React.FC<CommentsPropsInterface> = ({ slug }) => {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log(data);
  if (loading) return null;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          کامنت ها
        </Typography>
        {!data?.comments[0] && (
          <Typography component="p" variant="subtitle2">
            کامنتی ثبت نشده است
          </Typography>
        )}
        {data?.comments.map((comment: commentInterface) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            m={2}
            p={2}
            sx={{ border: "1px silver solid", borderRadius: 1 }}
          >
            <Box
              component="div"
              display="flex"
              justifyContent="start"
              alignItems="center"
              mb={2}
            >
              <Avatar>{comment?.name[0]}</Avatar>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight={500}
                mr={1}
                color="primary"
              >
                {comment?.name}
              </Typography>
            </Box>
            <Typography component="p" variant="subtitle2">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;

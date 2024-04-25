"use client";

import React from "react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import { useRouter } from "next/navigation";
import { BlogPostPropsInterface } from "@/contracts/interfaces";

const BlogDetails: React.FC<BlogPostPropsInterface> = ({
  author,
  content,
  coverPhoto,
  title,
}) => {
  const router = useRouter();
  return (
    <>
      <Grid item xs={12} mt={8} display="flex" justifyContent="space-between">
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          fontWeight={700}
        >
          {title}
        </Typography>
        <ArrowBackIcon fontSize="large" onClick={() => router.back()} />
      </Grid>
      <Grid item xs={12} mt={6}>
        <img
          src={coverPhoto?.url}
          style={{
            width: "70%",
            height: "500px",
            margin: "auto",
            borderRadius: "15px",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        mt={7}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Avatar src={author?.avatar.url} sx={{ width: 80, height: 80 }} />
        <Stack display="flex" flexDirection="column" justifyContent="center">
          <Typography component="p" variant="h5" fontWeight="700" mr={2}>
           نویسنده: {author?.name}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            mr={2}
            color="text.secondary"
          >
            {author?.field}
          </Typography>
        </Stack>
      </Grid>
      <Grid item mt={2} xs={12}>
        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content?.html),
          }}
        />
      </Grid>
    </>
  );
};

export default BlogDetails;

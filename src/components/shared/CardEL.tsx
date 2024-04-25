"use client";
import { postInterface } from "@/contracts/interfaces";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const CardEL: React.FC<postInterface> = ({
  title,
  slug,
  coverPhoto,
  author,
}) => {
  return (
    <Card
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "4px" }}
    >
      {author ? (
        <CardHeader
          avatar={<Avatar src={author?.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="body2" color="text.secondary">
              {author?.name}
            </Typography>
          }
        />
      ) : null}
      <CardMedia
        component="img"
        sx={{ height: "194px", width: "100%", objectFit: "cover" }}
        image={coverPhoto.url}
        alt="image"
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%", fontWeight: "bold" }}
          href={`/blogs/${slug}`}
          LinkComponent={Link}
        >
          مطالعه مقاله
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardEL;

import { BlogPostPropsInterface } from "@/contracts/interfaces";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import BlogDetails from "../modules/BlogPage/BlogDetails";
import SendCommentForm from "../modules/BlogPage/SendCommentForm";
import Comments from "../modules/BlogPage/Comments";

const BlogPage: React.FC<BlogPostPropsInterface> = ({
  author,
  content,
  coverPhoto,
  title,
  slug,
}) => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Grid container>
        <BlogDetails
          author={author}
          content={content}
          coverPhoto={coverPhoto}
          title={title}
          slug={slug}
        />
        <Grid
          item
          xs={12}
          mt={7}
          padding={1}
          sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: "8px",
          }}
        >
          <SendCommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;

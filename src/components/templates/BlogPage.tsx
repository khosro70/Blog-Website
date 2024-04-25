import { BlogPostPropsInterface } from "@/contracts/interfaces";
import { Container, Grid } from "@mui/material";
import BlogDetails from "../modules/BlogPage/BlogDetails";

const BlogPage: React.FC<BlogPostPropsInterface> = ({
  author,
  content,
  coverPhoto,
  title,
}) => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Grid container>
        <BlogDetails
          author={author}
          content={content}
          coverPhoto={coverPhoto}
          title={title}
        />
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;

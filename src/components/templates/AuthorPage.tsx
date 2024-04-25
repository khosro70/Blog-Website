import { AuthorPagePropsInterface } from "@/contracts/interfaces";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const AuthorPage: React.FC<AuthorPagePropsInterface> = ({
  avatar,
  name,
  description,
  field,
  posts,
  loading,
}) => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Grid container mt={10}>
        {loading ? (
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Loader height="40" width="40" />
          </Grid>
        ) : (
          <>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar src={avatar?.url} sx={{ width: 250, height: 250 }} />
              <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
                {name}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                color="text.secondary"
                mt={2}
              >
                {field}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(description.html),
                }}
              />
            </Grid>
            <Grid item xs={12} mt={6} mb={3}>
              <Typography component="h3" variant="h5" fontWeight={700}>
                مقالات {name}
              </Typography>
              <Grid container spacing={2} mt={2}>
                {posts.map((post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <CardEL {...post} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default AuthorPage;

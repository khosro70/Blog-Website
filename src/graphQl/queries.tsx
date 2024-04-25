import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      coverPhoto {
        url
      }
      id
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      avatar {
        url
      }
      slug
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      description {
        html
      }
      field
      posts {
        id
        title
        coverPhoto {
          url
        }
        slug
      }
    }
  }
`;

export const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;

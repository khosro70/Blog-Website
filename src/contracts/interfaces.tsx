export interface postInterface {
  author?: {
    name: string;
    avatar: {
      url: string;
    };
  };
  title: string;
  slug?: string;
  coverPhoto: {
    url: string;
  };
  id: string;
}

export interface authorInterface {
  id: string;
  name: string;
  avatar: {
    url: string;
  };
  slug: string;
}

export interface AuthorInterface {
  params: {
    authorSlug: string;
  };
}

export interface BlogInterface {
  params: {
    blogSlug: string;
  };
}

export interface LoaderPropsInterface {
  height: string;
  width: string;
}

export interface AuthorPagePropsInterface {
  avatar: {
    url: string;
  };
  name: string;
  description: {
    html: string;
  };
  field: string;
  posts: Array<postInterface>;
  loading: boolean;
}

export interface BlogPostPropsInterface {
  author: {
    avatar: {
      url: string;
    };
    field: string;
    name: string;
  };
  content: {
    html: string;
  };
  coverPhoto: {
    url: string;
  };
  title: string;
  slug: string;
}

export interface CommentsPropsInterface {
  slug: string;
}

export interface commentInterface {
  id: string;
  name: string;
  text: string;
}

export interface SendCommentFormPropsInterface {
  slug: string;
}

export interface CommentFormInputs {
  name: string;
  email: string;
  text: string;
}

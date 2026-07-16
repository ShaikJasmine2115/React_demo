export type Project = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    details: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
};

export type StrapiResponse<T> = {
  data: T[]
};

export type StrapiProject ={
  id: string;
  documentId: string;
  title: string;
  description: string;
  details: string;
  image: {
    url: string;
    formats?: {
      small?: {url: string;};
      medium?: {url: string;};
      large?: {url: string;};
      thumbnail?: {url: string;};
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
}

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  image: string;
}

export type StrapiPost ={
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: {
    url: string;
    formats?: {
      small?: {url: string;};
      medium?: {url: string;};
      large?: {url: string;};
      thumbnail?: {url: string;};
    };
  };
  date: string;
  body: string;
}
export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
}

export type BlogPostDetailsProps = {
  loaderData: {
    post: Post;
  }
}

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export type LatestPostProps = {
  posts: Post[];
  limit?: number;
}
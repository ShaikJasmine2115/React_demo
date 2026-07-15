export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
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
    post: BlogPost;
    markdown: string;
  }
}

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export type LatestPostProps = {
  posts: BlogPost[];
  limit?: number;
}
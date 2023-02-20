import { IGatsbyImageData } from "gatsby-plugin-image";

export interface BlogPost {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      slug: string;
      title: string;
      description: string;
      date: string;
      featuredImage: IGatsbyImageData;
    };
  };
}

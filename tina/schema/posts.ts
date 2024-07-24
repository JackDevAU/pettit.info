import { Collection } from "tinacms";

export const PostSchema: Collection = {
  name: "post",
  label: "Posts",
  format: "mdx",
  path: "content/posts",
  ui: {
    router: ({ document }) => {
      return `blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
      description: "A short description of the post",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
      ui: {
        defaultValue: true,
      },
    },
    {
      type: "datetime",
      name: "datePublished",
      label: "Published Date",
    },
    {
      type: "datetime",
      name: "lastUpdated",
      label: "Last Updated",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

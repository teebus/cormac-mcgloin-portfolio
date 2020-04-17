import { object } from "prop-types"

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "pageContent",
      title: "Page content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
}

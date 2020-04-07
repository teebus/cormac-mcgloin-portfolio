import { object } from "prop-types"

export default {
  name: "project",
  title: "Project",
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
      name: "projectHero",
      title: "Project Hero",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectDescription",
      title: "Project description",
      type: "text",
    },
    {
      name: "projectImages",
      title: "Project Images",
      type: "array",
      of: [{ type: "projectImage" }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
  ],

  //TODO play with previews
}

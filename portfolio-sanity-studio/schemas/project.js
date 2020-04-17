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
      title: "Project hero",
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
      name: "projectRole",
      title: "Role in project",
      type: "string",
    },
    // {
    //   name: "projectSection",
    //   title: "Project section",
    //   type: "array",
    //   of: [{ type: "projectImage" }, { type: "projectSnippet" }],
    // },
    {
      name: "projectContent",
      title: "Project content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
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

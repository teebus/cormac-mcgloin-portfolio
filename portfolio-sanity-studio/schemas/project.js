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
      name: "image",
      title: "Project Screenshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projectImages",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
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

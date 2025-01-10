import type { Collection } from "tinacms";

export const ProjectsSchema: Collection = {
	name: "project",
	label: "Projects",
	format: "mdx",
	path: "content/projects",
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
		},
		{
			type: "number",
			name: "order",
			label: "Order to display",
			description: "smallest number will be displayed first",
		},
		{
			type: "string",
			name: "color",
			ui: {
				component: "color"
			},
		},
		{
			type: "string",
			name: "abstract",
			label: "Abstract",
			required: true,
			description: "A short description of the post",
		},
		{
			type: "string",
			name: "websiteLink",
			label: "Website Link",
			description: "A link to the project's landing page",
		},
		{
			type: "string",
			name: "githubLink",
			label: "GitHub Link",
			description: "A link to the projects GitHub",
		},
		{
			name: "coverImage",
			label: "Cover Image",
			type: "image",
			required: true,
			description: "An image of the project",
		},
		{
			type: "object",
			label: "Skills Used",
			name: "skills",
			list: true,
			ui: {
				itemProps: (item) => {
					//! This is not great...
					return {
						label: item?.tag,
					};
				},
			},
			fields: [
				{
					collections: ["tag"],
					type: "reference",
					name: "tag",
					label: "Tag",
				},
			],
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

import type { Collection } from "tinacms";
import { ColorPickerInput } from "../fields/colour";

export const TagsSchema: Collection = {
	name: "tag",
	label: "Tags",
	format: "mdx",
	path: "content/tags",
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
		},
		{
			name: "colour",
			type: "string",
			label: "Colour",
			ui: {
				component: ColorPickerInput as any,
			},
		},
		{
			type: "string",
			name: "description",
			label: "Description",
			required: true,
			description: "A short description of the tag",
		},
		{
			type: "boolean",
			name: "displaySkill",
			label: "Display skill",
			searchable: true,
			ui: {
				defaultValue: true,
			},
		},
	],
};

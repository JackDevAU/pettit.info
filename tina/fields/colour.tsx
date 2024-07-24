import { cn } from "../../lib/utils";
import React from "react";
import { wrapFieldsWithMeta } from "tinacms";

export const colorOptions = [
	"blue",
	"teal",
	"green",
	"yellow",
	"orange",
	"red",
	"pink",
	"purple",
	"white",
];

export const ColorPickerInput = wrapFieldsWithMeta(({ input }) => {
	const inputClasses: { [key: string]: string } = {
		blue: "bg-blue-500 ",
		teal: "bg-teal-500 ",
		green: "bg-green-500 ",
		yellow: "bg-yellow-500 ",
		orange: "bg-orange-500 ",
		red: "bg-red-500 ",
		pink: "bg-pink-500",
		purple: "bg-purple-500",
		white: "bg-white  ",
	};

	return (
		<>
			<input type="text" id={input.name} className="hidden" {...input} />
			<div className="flex gap-2 flex-wrap">
				{colorOptions.map((color) => {
					return (
						<button
							type="button"
							style={{ backgroundColor: color }}
							key={color}
							className={cn(
								`w-9 h-9 bg- rounded-full shadow border  ${
									input.value === inputClasses[color]
										? "ring-[3px] ring-offset-2 ring-blue-400"
										: ""
								}`,
							)}
							onClick={() => {
								input.onChange(inputClasses[color]);
							}}
						/>
					);
				})}
			</div>
		</>
	);
});

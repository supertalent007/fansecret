"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme } = useTheme();
		const [bgColor, setBgColor] = useState(""); // Local state for background color

	// Function to change background color
	const changeBackgroundColor = () => {
		setBgColor("#fff9f6"); // Change background color to the desired color
		setTheme("light"); // Optionally, set theme to light as well
	};
	return (
		<div className='flex flex-wrap gap-2 px-1 md:px-2'>
			<Button variant={"outline"} size={"icon"} onClick={changeBackgroundColor}>
				<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 text-muted-foreground' />
			</Button>
			<Button variant={"outline"} size={"icon"} onClick={() => setTheme("dark")}>
				<MoonIcon className='absolute h-[1.2rem] w-[1.2rem]  transition-all  dark:scale-100 text-muted-foreground' />
			</Button>
		</div>
	);
}

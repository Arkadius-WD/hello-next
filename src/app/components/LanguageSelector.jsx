"use client";
import { useState } from "react";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
	const [slectedOption, setSelectedOption] = useState();

	return (
		<>
			<p>Wybrana opcja: {slectedOption}</p>
			<select
				className={styles.languageSelector}
				onChange={(e) => setSelectedOption(e.target.value)}
			>
				<option value="PL">Polski</option>
				<option value="EN">Angielski</option>
			</select>
		</>
	);
}

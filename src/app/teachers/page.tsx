"use client";
import dynamic from "next/dynamic";
import React, { Suspense, use } from "react";
import Header from "./_components/header";

const Teachers = dynamic(() => import("./_components/teachers"), {
	ssr: false,
});

export default function TeachersPage() {
	return (
		<>
			<Header />
			<main>
				<Teachers />
			</main>
		</>
	);
}

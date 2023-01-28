import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../index.module.css";

function Header() {
	return (
	<header className={clsx("hero hero--primary", styles.downloads, styles.heroBanner)}>
		<div className="container">
			<h1 className="hero__title">Archive</h1>
		</div>
	</header>
	)
}

export default function Main() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="ReviOS aspires to re-create what Windows as an operating system should have been - easy and simple.
		With the main audience being gamers, power-users and enthusiasts, we understand that performance, speed and low latency is obligatory, which is why great effort has been invested into making ReviOS a capable, efficient yet private operating system.
		Being naturally light on resources, footprint and size it also comes in as a great fit for low-end systems. "
		>
			<Header />
			<main>
				<Download />
			</main>
		</Layout>
	);
}

function Download() {
	const url = "https://api.stasium.dev/v1/revios/downloads"
	const [isLoading, setLoading] = useState(true);
	const [downloads, setDownloads] = useState();

	useEffect(async () => {
		let api = await fetch(url, {
			method: 'GET'
		});

		let result = await api.json();
		
		setDownloads(result);
		setLoading(false);	
	}, [])

	if (isLoading) {
		return (
			<section style={{ padding: `2rem 0` }}>
			<div className="container">
				<div className="row lds-center">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</section>
		)
	}

	return (
		<section style={{ padding: `2rem 0` }}>
			<div className="container">
				<div className="row">
					{downloads.map((props, idx) => (
						<DownloadSection key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}

function DownloadSection({ title, sub_title, links, archived }) {
	if (!archived) return (null)

	return (
		<div style={{ padding: `2rem 6rem` }} className={clsx("col col--6")}>
			<h2>{title}</h2>
			<h3>{sub_title}</h3>
			{/*{links.map((link, i) => (*/}
				{links.first().buttons.map((button, i) => (
					<div className={styles.downloadBtn}>
						<Link key={'btn'+i} className={!i ? 
								"button button--secondary button--lg" : 
								"button button--outline button--secondary button--lg"}
								to={button.url}>
							{button.title}
						</Link>
					</div>
				))}
			{/*))}*/}
		</div>
	)
}

Array.prototype.first = function() {
	return this[0]
}
  
  Array.prototype.last = function() {
	return this[this.length -1];
}
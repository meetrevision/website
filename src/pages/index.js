import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/downloads"
          >
            Download ReviOS
          </Link>
        </div>
      </div>
    </header>
  );
}

function ReviAbout() {
  return (
    <section style={{ padding: `4rem 0` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--8")}>
            <div className="text--left">
              <p>
                ReviOS aspires to re-create what Windows as an operating system
                should have been - easy and simple.
              </p>
              <p>
                With the main audience being gamers, power-users and
                enthusiasts, we understand that performance, speed and low
                latency is obligatory, which is why great effort has been
                invested into making ReviOS a capable, efficient yet private
                operating system.
              </p>
              <p>
                Being naturally light on resources, footprint and size it also
                comes in as a great fit for low-end systems.
              </p>
            </div>
          </div>
          <div className={clsx("col")}>
            <div className={styles.buttonPair}>
              <Link to="/faq">
                <button
                  className={
                    styles.homeButton +
                    " button button--outline button--secondary button--lg"
                  }
                  type="button"
                >
                  🤔 FAQ
                </button>
              </Link>
              <Link to="/changelog">
                <button
                  className={
                    styles.homeButton +
                    " button button--outline button--secondary button--lg"
                  }
                  type="button"
                >
                  📄 Changelog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ReviOS aspires to re-create what Windows as an operating system should have been - easy and simple.

	  With the main audience being gamers, power-users and enthusiasts, we understand that performance, speed and low latency is obligatory, which is why great effort has been invested into making ReviOS a capable, efficient yet private operating system.
	  
	  Being naturally light on resources, footprint and size it also comes in as a great fit for low-end systems. "
    >
      <HomepageHeader />
      <main>
        <ReviAbout />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

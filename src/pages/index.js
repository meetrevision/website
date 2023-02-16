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
        {/* <div className={styles.buttons}>
          <Link className="button button--secondary button--outline button--lg" to="/downloads">
            Download ReviOS
          </Link>
        </div> */}
      </div>
    </header>
  );
}

function RevisionAbout() {
  return (
    <section className="margin-vert--lg">
      <div className="container padding-horiz--xl">
        <h1 className="text--center">Who we are</h1>
        <div className="text--left">
          <p>
            A global community dedicated to free information and collaboration. We value cultural diversity and embrace
            open source principles. Every mind is unique and every contribution is valued.
          </p>
        </div>

        <div className="row margin-horiz--xl">
          <Link to="https://discord.gg/962y4pU" className="col col--4 button button--secondary button--outline">
            <i className="fa-brands fa-discord" />
            <span className="padding-left--sm">Discord</span>
          </Link>
          <Link to="https://github.com/MeetRevision" className="col col--4 button button--secondary button--outline">
            <i className="fa-brands fa-github" />
            <span className="padding-left--sm">GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviAbout() {
  return (
    <section>
      <div className={clsx("container padding-top--lg padding-bottom--xl mockup-image--1")}>
        <h1 className="text--center">Our main project: ReviOS</h1>
        <p>
          <b>ReviOS</b>, a customized version of Windows 10 with improved performance, stability, and compatibility. It
          aspires to re-create what Windows as an operating system should have been - easy and simple.
        </p>
        <p>
          With the main audience being gamers, power-users and enthusiasts, we understand that performance, speed and
          low latency is obligatory, which is why great effort has been invested into making ReviOS a capable,{" "}
          <b>efficient yet private</b> operating system.
        </p>
        <p>
          Being naturally light on resources, footprint and size it also comes in as a great fit for low-end systems.
        </p>
        <div className="row">
          <div className="col--4">
            <Link to="/downloads">
              <a className="button button--secondary button--lg">Download Revision</a>
            </Link>
          </div>
          <div className="col--4">
            <Link to="/faq">
              <a className="button button--outline button--secondary button--lg">Frequent Questions</a>
            </Link>
          </div>
          <div className="col--4">
            <Link to="/changelog">
              <a className="button button--outline button--secondary button--lg">Changelog</a>
            </Link>
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
        <RevisionAbout />
        <ReviAbout />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

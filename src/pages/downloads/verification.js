import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../index.module.css";

function Header() {
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.downloads,
        styles.heroBanner
      )}
    >
      <div className="container">
        <h1 className="hero__title">Verification</h1>
      </div>
    </header>
  );
}

function Info() {
  return (
    <section style={{ paddingTop: `4rem` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <div className="text--left padding-horiz--md">
              <p>
                ReviOS ISOs not provided through this site are considered
                non-verifiable and should NOT be deployed.
              </p>
              <p>
                Please confirm that you have a legitimate copy of ReviOS by
                hash-checking the ISO before deploying it on your system.
              </p>
              <p>
                Ensure the site hasn't been modified in any way, e.g. with
                inspect element and the likes - this can be done by accessing
                the site through different browsers on multiple devices and
                securing that they match.
              </p>
              <p>
                Below you'll find a hash list of old and new ReviOS builds which
                should be used as a validated reference in the verification
                process.
              </p>
              <p>
                Revision only support the builds found on the download page of
                this site.
              </p>
              <p>
                Unsupported builds are superseded by newer ones and are no
                longer part of the ReviOS support channel found on our Discord
                server.
              </p>
              <p>
                <b>Supported builds are checkmarked (✅)</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hashes() {
  const url = "https://api.stasium.dev/v1/revios/hashes";
  const [isLoading, setLoading] = useState(true);
  const [hashes, setHashes] = useState();

  useEffect(async () => {
    let api = await fetch(url, {
      method: "GET",
    });

    let result = await api.json();

    console.log(result);
    setHashes(result.reverse());
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section style={{ paddingTop: `4rem` }}>
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
    );
  }

  return (
    <div>
      {hashes.map((props, idx) => (
        <HashesSection key={idx} index={idx} {...props} />
      ))}
    </div>
  );
}

function HashesSection({ index, name, md5, sha256 }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className={clsx("col col-12")}>
            <div className="text--left padding-horiz--md">
              <hr />
              <h3>{index < 4 ? name + " ✅" : name}</h3>
              <p>MD5:</p>
              <pre>
                <code>{md5}</code>
              </pre>
              <p>SHA-256:</p>
              <pre>
                <code>{sha256}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
        <Info />
        <Hashes />
      </main>
    </Layout>
  );
}

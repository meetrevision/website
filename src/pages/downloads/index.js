import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../index.module.css";

function DownloadLinks({ urlSnub }) {
  const url = "https://api.revi.cc/api/revios/" + urlSnub;
  let isUpgrade;
  urlSnub === "upgrade" && (isUpgrade = true);
  const [isLoading, setLoading] = useState(true);
  const [downloads, setDownloads] = useState();

  useEffect(async () => {
    let api = await fetch(url, {
      method: "GET",
    });

    let result = await api.json();

    setDownloads(result);
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="padding-y--md">
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

  return <DownloadSection downloads={downloads} isUpgrade={isUpgrade} />;
}

function Header() {
  return (
    <header className={clsx("hero hero--primary", styles.downloads, styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Download ReviOS</h1>
        <h3>
          Unlock your machine's true potential with optimized performance, low latency and reduced data collection.
        </h3>
      </div>
    </header>
  );
}

function DownloadSection({ downloads, isUpgrade }) {
  return (
    <section className={!isUpgrade ? "container padding-top--md" : "col"}>
      <div className="row">
        {downloads.map((props, idx) => (
          <div key={idx} className="col padding-vert--md text--center">
            <h2>{props.title}</h2>
            {!isUpgrade && (
              <>
                <h3>{props.sub_title}</h3>
                <p style={{ maxWidth: "50%", margin: "auto" }} className="margin-bottom--md">
                  {props.description}
                </p>
                <div>
                  {props.tags.map((tag, i) => (
                    <button key={"tag" + i} className="buttonTags">
                      {tag}
                    </button>
                  ))}
                </div>
              </>
            )}
            {props.links[0].buttons.map((button, i) => (
              <div key={"btn" + i} className="padding-vert--xs padding-horiz--md">
                <Link
                  to={button.url}
                >
                  <button className={
                    !i
                      ? "button button--block button--secondary button--lg button--block"
                      : "button button--block button--outline button--secondary button--lg button--block"
                  }>
                    <i className="fa-duotone fa-download fa-lg"></i>
                    <span className="padding-left--sm">{button.title}</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function DownloadNotes() {
  return (
    <section className="container padding-top--md">
      <div>
        <h3>Important Notes</h3>
        <ul>
          <li>
            A <b>Window Pro License key</b> is required to activate any ReviOS release.
          </li>
          <li>
            These ISOs <b>require</b> you to wipe your drives. Please make proper backups of your important data.
          </li>
          <li>
            Verify the ISO after downloading to ensure there are no errors with the help of{" "}
            <a href="/downloads/verification">this guide</a>.
          </li>
          <li>
            <b>Windows 11 only:</b> to play Valorant and other anti-cheat games, Secure Boot and TPM must be{" "}
            <a href="https://www.windowscentral.com/how-enable-secure-boot-pc-install-windows-11">enabled in BIOS</a>.
          </li>
          <li>
            By downloading ReviOS, you agree with the <a href="/legal">legal considerations</a> and{" "}
            <a href="/terms">Terms of Use</a>.
          </li>
          <li>
            To support Revision, links are provided through ads. Should you have trouble getting the link, please
            consider installing <a href="httlis://ublockorigin.com">uBlock Origin</a>.
          </li>
        </ul>
      </div>
    </section>
  );
}

function UpgradeInfo() {
  return (
    <section className="container padding-top--md">
      <div>
        <details className="padding-horiz--lg padding-vert--md" style={{ borderRadius: "5px" }}>
          <summary style={{ cursor: "pointer" }}>
            <b>Looking to update your current ReviOS?</b>
          </summary>
          <div className="row margin-top--sm ">
            <div className="col col--4">
              <span className="text--left">
                <p>
                  The upgrading process is still experimental and <b>exclusively</b> works if you're already on ReviOS.
                  It <b>does not work</b> if you're on anything else!
                </p>
                <p className="margin-bottom--none">
                  We also urge you to read the <b>Upgrade Guide</b> to ensure a smooth upgrade without data loss.
                </p>
              </span>
              <Link to="/faq/upgrade" className="button button--primary button--lg button--block margin-top--sm ">
                <i className="fa-duotone fa-book-open-cover" />
                <span className="padding-left--sm">Upgrading Guide</span>
              </Link>
            </div>
            <DownloadLinks urlSnub={"upgrade"} />
          </div>
        </details>
      </div>
    </section>
  );
}

function GeneralInfo() {
  return (
    <section className="container padding-top--md">
      <div className="row">
        <div className="col col--7">
          <span>
            <h2>Unsure how to install?</h2>
            <p>
              The detailed installation guide can be found in the FAQ under "<a href="/faq/install">How to install</a>".
            </p>
          </span>
          <span>
            <h2>Curious about the changes?</h2>
            <p>
              The update history can be found in the <a href="/changelog">Changelog</a>.
            </p>
          </span>
          <span>
            <h2>Having trouble in the OS?</h2>
            <p>
              Our <a href="/faq">FAQ</a> has answers to many common problems. Should you not find an answer there, feel
              free to ask for help in our <a href="https://discord.com/invite/962y4pU">Discord server</a>.
            </p>
          </span>
        </div>
        <div className="col">
          <h2>Minimum system requirements</h2>
          <ul className="checkmark-list">
            <li>1 GHz dual core processor</li>
            <li>2 GB of system memory (RAM)</li>
            <li>15-20 GB of free disk space (20-25GB for upgrading)</li>
            <li>64 bit system capability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Downloads() {
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
        <DownloadLinks urlSnub={"downloads"} />
        <DownloadNotes />
        <UpgradeInfo />
        <GeneralInfo />
      </main>
    </Layout>
  );
}

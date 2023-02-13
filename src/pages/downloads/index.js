import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../index.module.css";

function Download() {
  const url = "https://revi-api.vercel.app/api/revios/downloads";
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
    );
  }

  return <DownloadSection downloads={downloads} />;
}

function DownloadHeader() {
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.downloads,
        styles.heroBanner
      )}
    >
      <div className="container">
        <h1 className="hero__title">Download ReviOS</h1>
      </div>
    </header>
  );
}

function DownloadInfo() {
  return (
    <section style={{ padding: `2rem 0` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <p>
              Download the latest release of ReviOS, a suitable replacement for
              stock Windows on desktop PCs and Laptops. Unlock your machine's
              true potential with optimized performance, low latency and reduced
              data collection. As with any Windows installation, an official
              license key is required.
            </p>
            <p>
              By downloading ReviOS, you agree with the{" "}
              <a href="/legal">Legal considerations</a> and{" "}
              <a href="/terms">Terms of Use.</a>
            </p>
            <p>
              To hash-check and verify the ISOs, go to{" "}
              <a href="/downloads/verification">verification</a>
            </p>
            <p>
              To support Revision, links are provided through ads. If any
              problem occurs, please consider installing{" "}
              <a href="https://ublockorigin.com">uBlock Origin</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadSection({ downloads }) {
  return (
    <section>
      <div className="container">
        <div className={clsx("row")}>
          {downloads.map((props, idx) => (
            <div
              key={idx}
              className={clsx("col", "padding-horiz--lg")}
              style={{ padding: `1rem 0` }}
            >
              <h2>{props.title}</h2>
              <h3>{props.sub_title}</h3>
              <p>{props.description}</p>
              <div className="buttonTagsDiv">
                {props.tags.map((tag, i) => (
                  <button key={"tag" + i} className="buttonTags">
                    {tag}
                  </button>
                ))}
              </div>

              {props.links.map((link, i) => (
                <div className={clsx("row margin-left--xs")}>
                  <div className="downloadButtons">
                    <h2 className="downloadTitle">{link.title}</h2>
                    {link.buttons.map((button, i) => (
                      <div className={styles.downloadBtn} {..."col col--6"}>
                        <Link
                          key={"btn" + i}
                          className={
                            !i
                              ? "button button--secondary button--lg"
                              : "button button--outline button--secondary button--lg"
                          }
                          to={button.url}
                        >
                          <i class="fa-duotone fa-download fa-lg"></i>
                          <span className="buttonText">{button.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Update() {
  return (
    <section style={{ padding: `2rem 0` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h2>Looking to Upgrade your ReviOS install?</h2>
            <p>
              To upgrade from an old ReviOS version to a new one, without a full
              reinstall, refer to the guide <a href="/faq/upgrade">here</a>.
            </p>
            <p>
              You can find the ISO for upgrading{" "}
              <a href="/downloads/upgrade">here</a>.
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section style={{ padding: `2rem 0` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <h2>What has changed?</h2>
            <p>
              Recent version changes can be found in the{" "}
              <a href="/changelog">changelog</a>.
            </p>
          </div>
          <div className={clsx("col col--6")}>
            <h2>Want to report a bug?</h2>
            <p>
              Please consult our <a href="/faq">FAQ</a> before reporting on our{" "}
              <a href="https://discord.com/invite/962y4pU">Discord server</a>,
              your problem may already be answered.
            </p>
          </div>
          <div className={clsx("col col--6")}>
            <h2>Minimum system requirements</h2>
            <p>
              <ul className="checkmark-list">
                <li>1 GHz dual core processor or better</li>
                <li>2 GB of system memory (RAM)</li>
                <li>15-20 GB of free disk space (20-25GB for upgrading)</li>
                <li>64 bit system capability</li>
                <li>A DVD or a USB drive for the installation</li>
              </ul>
            </p>
          </div>
          <div className={clsx("col col--6")}>
            <h2>Installation Guide</h2>
            <p>
              For a detailed installation guide, check out the{" "}
              <a href="/faq/install">How to install</a> page of the FAQ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdditionalInfo() {
  return (
    <section style={{ padding: `2rem 0` }}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h2>Additional Info</h2>
            <h3>Windows 11</h3>
            <p>
              For Valorant and other anti-cheat games - Secure Boot and TPM must
              be enabled in BIOS. See how it's done{" "}
              <a href="https://www.windowscentral.com/how-enable-secure-boot-pc-install-windows-11">
                here
              </a>
              .
            </p>
            {/* <h3>Other releases</h3>
            <p>
              For other versions of ReviOS, including old and deprecated
              releases, see archive <a href="/downloads/archive">downloads</a>.
            </p> */}
            <h3>Alternative download links</h3>
            <p>
              Please join in our{" "}
              <a href="https://discord.com/invite/962y4pU">Discord</a> and check
              the{" "}
              <a href="https://discord.com/channels/619835916139364383/658369065110339640">
                download channel
              </a>{" "}
              for mirror links.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DownloadMain() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ReviOS aspires to re-create what Windows as an operating system should have been - easy and simple.
		With the main audience being gamers, power-users and enthusiasts, we understand that performance, speed and low latency is obligatory, which is why great effort has been invested into making ReviOS a capable, efficient yet private operating system.
		Being naturally light on resources, footprint and size it also comes in as a great fit for low-end systems. "
    >
      <DownloadHeader />
      <main>
        <DownloadInfo />
        <Download />

        <Update />
        <Info />
        <AdditionalInfo />
      </main>
    </Layout>
  );
}

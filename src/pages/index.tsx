import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onClick={() => navigator.clipboard.writeText("mc.repl.game")}
          >
            Play now: mc.repl.game
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title='Home'
      description="Friends of Replit Minecraft Servers"
    >
      <HomepageHeader />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
        }}
      >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

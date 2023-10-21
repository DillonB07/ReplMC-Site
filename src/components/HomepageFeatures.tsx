import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Bedrock Compatible",
    src: "img/logos/geysermc.png",
    description: (
      <>
        We use GeyserMC to allow you to connect to our main SMP from both Java
        and Bedrock Editions of Minecraft.
      </>
    ),
  },
  {
    title: "Minecraft Trails & Tales",
    src: "img/logos/trailstales.png",
    description: (
      <>
        A 1.20.1 Minecraft Server with all the latest features including
        archeology, sniffers, and more!
      </>
    ),
  },
  {
    title: "Origins SMP",
    src: "img/logos/origins.webp",
    description: (
      <>
        Our modded SMP server features the Origins mod, enabling you to select a
        distinct origin for your character that alters your gameplay experience.
        You can only join the modded SMP on Java Edition.
      </>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImg} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

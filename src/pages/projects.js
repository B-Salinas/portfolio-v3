import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const projects = [
  {
    text: "Spinning Donut",
    url: "https://github.com/B-Salinas/spinning-donut",
    description:
      "Used Python, Pygame, and Linear Algebra to display a 2D rendering of a spinning torus using ASCII. Purely for fun.",
  },
  {
    text: "Yu-Gi-Oh! GX Duel Academy Deck Builder",
    url: "https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder",
    description:
      "Based on Yu-Gi-Oh! GX Duel Academy’s built-in deck editor, users can browse, sort, and edit their decks.",
  },
  {
    text: "ThrifTEE",
    url: "https://github.com/vmeduri1/thrifTEE",
    description:
      "An e-commerce website, inspired by ThredUp, where users can browse items, search by keyword and add items to a page-persisting cart.",
  },
  {
    text: "SoundTrack",
    url: "https://github.com/B-Salinas/SoundTrack",
    description:
      "SoundCloud inspired, users can browse, comment, and favorite soundtracks from different movie scores.",
  },
  {
    text: "Veni Vidi Voravi",
    url: "https://github.com/rsdimatulac/Veni-Vidi-Voravi",
    description:
      'Allows users to share and discover experiences from different culinary adventures. Veni Vidi Voravi stands for "I came, I saw, I devoured".',
  },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <p>All of my projects, found in one place.</p>
    <ul className={styles.list}>
      {projects.map((link) => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <br />
    <Link to="/">Home</Link>
  </Layout>
);

export const Head = () => <Seo title="Projects" />;

export default Projects;

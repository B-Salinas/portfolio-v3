import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

//

const introLinks = [
  {
    text: "About B",
    url: "about-b",
  },
  {
    text: "@",
    url: "mailto:b.salinas397@gmail.com",
  },
  {
    text: "GitHub",
    url: "https://github.com/b-salinas",
    // how do i get it to automatically open in a new tab quietly?
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/b-salinas/",
    // same thing as above here
  },
  {
    text: "Resume",
    url: "https://docs.google.com/document/d/1tlmk7AwTIvdqatvG3NQtbGvplOkeWa_lBR_bnFkh_dw/edit?usp=sharing",
  },
];

const navLinks = [
  {
    text: "Projects",
    url: "projects",
    description:
      "Favorite skills include JavaScript, Python, SQL/PostgreSQL, React with Chakra-UI, Figma, Notion, and Markdown. Currently learning Solidity and Ruby.",
  },
  {
    text: "Experience",
    url: "experience",
    description:
      "Experienced in Mathematics, Full-Stack, Design, Testing & Automation, Research/Teaching and Customer Service.",
  },
];

// const footerLinks = [
//   {
//     text: "Designed & Built by B",
//     url: "https://github.com/B-Salinas/portfolio-v1",
//   },
// ];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

//

const IndexPage = () => (
  <Layout>
    {/* INTRO LINKS */}
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/maki.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Hi, I'm <b>B!</b>
      </h1>
      <p className={styles.intro}>
        <b>Important Links:</b>{" "}
        {introLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== introLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Mathematician, Full-Stack Software Engineer & Creative in Austin, TX
        <br />
      </p>
    </div>
    {/* NAV LINKS */}
    <ul className={styles.list}>
      {navLinks.map((link) => (
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
    <p>
      A proud member of the Hispanic & Queer community, born and raised in Texas
      🇲🇽 🏳️‍🌈 🤠
    </p>
    {/* FOOTER LINKS */}
    {/* {footerLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== footerLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const experience = [
  {
    text: "Dish Washer @ H-Mart (Current)",
    url: "",
    description:
      "I'll occasionally set the plates and stand in as a cashier on the busier days.",
  },
  {
    text: "Associate QA Engineer @ Ender",
    url: "",
    description:
      "Was 1 of 3 in a team of 40+ responsible for the day-to-day manual/automated testing and QAing. Managed multiple workloads, reviewed PRs, talked to devs, debugged, and signed-off on features.",
  },
  {
    text: "Software Engineer in Text @ Capgemini",
    url: "",
    description:
      "Worked with a team <15 to automate scripts for insurance validation.",
  },
  {
    text: "Front Desk Associate @ Gold's Gym",
    url: "",
    description:
      "Managed dues and accounts, took inventory, and ensured the Gold's Gym Experience.",
  },
  // {
  //   text: "Benefits Assistant @ Travis County",
  //   url: "",
  //   description: "Oct 2019 - Mar 2020",
  // },
  // {
  //   text: "Research Intern @ Travis County",
  //   url: "",
  //   description: "Jun - Aug 2019",
  // },
  // {
  //   text: "Community Outreach Coordinator @ Office of Diversity & Inclusion, St. Edward's University",
  //   url: "",
  //   description: "Aug 2018 - May 2019",
  // },
  // {
  //   text: "Research Assistant @ Department of Mathematics, St. Edward's University",
  //   url: "",
  //   description: "May 2017 - May 2019",
  // },

  // Research Assistant w Sacolo, BEAM and TAing for Dr. Greene,
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const Experience = () => (
  <Layout>
    <h1>Experience</h1>
    <p>
      My <a href="https://www.linkedin.com/in/b-salinas"> Linkedin </a> has more
      details. In 2022 alone, I've been a/an..
      <ul className={styles.list}>
        {experience.map(link => (
          <li key={link.url} className={styles.listItem}>
            <span
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text}
            </span>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </p>
    <br />
    <Link to="/">Home</Link>
  </Layout>
)

export const Head = () => <Seo title="Experience" />

export default Experience

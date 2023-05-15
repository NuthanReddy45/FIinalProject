import React from "react";
import Footer from "../layout/footer";

const Carrers = () => {
  const resources = [
    {
      name: "Alison",
      description:
        "Over 60 million lessons and records 1.2 million unique visitors per month",
      url: "https://alison.com/",
    },
    {
      name: "Coursera",
      description:
        "Educational website that works with universities to get their courses on the Internet, free for you to use. Learn from over 542 courses.",
      url: "https://www.coursera.org/",
    },
    {
      name: "The University of Reddit",
      description: "The free university of Reddit.",
      url: "https://www.reddit.com/r/UniversityofReddit/",
    },
    {
      name: "Udacity",
      description:
        "Advance your education and career through project-based online classes, mainly focused around computer, data science and mathematics.",
      url: "https://www.udacity.com/",
    },
    {
      name: "MIT Open CourseWare",
      description:
        "Free access to quite a few MIT courses that are on par with what you'd expect from MIT.",
      url: "https://ocw.mit.edu/index.htm",
    },
    {
      name: "Open Culture",
      description:
        "Compendium of free learning resources, including courses, textbooks, and videos/films.",
      url: "https://www.openculture.com/",
    },
    {
      name: "No Excuse List",
      description: "Huge list of websites to learn from.",
      url: "http://noexcuselist.com/",
    },
    {
      name: "Open Yale Courses",
      description:
        "Open Yale Courses provides free and open access to a selection of introductory courses taught by distinguished teachers and scholars at Yale University All lectures were recorded in the Yale College classroom and are available in video, audio, and text transcript formats. Registration is not required.",
      url: "https://oyc.yale.edu/",
    },
    {
      name: "Khan Academy",
      description:
        "Watch thousands of micro-lectures on topics ranging from history and medicine to chemistry and computer science.",
      url: "https://www.khanacademy.org/",
    },
    {
      name: "Zooniverse",
      description:
        "Take part in a huge variety of interesting studies of nature, science, and culture.",
      url: "https://www.zooniverse.org/",
    },
    {
      name: "TUFTS Open CourseWare",
      description:
        "Tufts OpenCourseWare is part of a new educational movement initiated by MIT that provides free access to course content for everyone online. Tufts' course offerings demonstrate the University's strength in the life sciences in addition to its multidisciplinary approach, international perspective and underlying ethic of service to its local, national and international communities.",
      url: "https://ocw.tufts.edu/",
    },
    {
      name: "How Stuff Works?",
      description:
        "More scientific lessons and explanations than you could sort through in an entire year.",
      url: "https://www.howstuffworks.com/",
    },
    {
      name: "Harvard Medical School Open Courseware",
      description:
        "The mission of the Harvard Medical School Open Courseware Initiative is to exchange knowledge from the Harvard community of scholars to other academic institutions, prospective students, and the general public.",
      url: "https://ocw.harvard.edu/",
    },
  ];

  return (
    <>
      <div className="card-container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">BACHPAN BACHAO ANDOLAN</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  EDUCATE CHILD, ONE STEP AHEAD TO DEVELOPMENT COUNTRY{" "}
                </h6>
                <p className="card-text">
                  PURPOSE: The stated vision of Bachpan Bachao Andolan (BBA) is
                  "to create a child friendly society where all children are
                  free from exploitation and receive free and quality education.
                  It aims to identify, liberate, rehabilitate and educate
                  children in servitude through direct intervention, child and
                  community participation, coalition building, consumer action,
                  promoting ethical trade practices and mass gaming."
                </p>
                <a href="http://www.bba.org.in/" className="card-link">
                  http://www.bba.org.in/
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Campaigns</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  BBA has led the largest civil society initiative in the world
                  against child labour in the form of the Global March Against
                  Child Labour in 1998, leading to ILO Convention 182 on Worst
                  Forms of Child Labour
                </h6>
                <p className="card-text">
                  One of the recent campaigns of BBA include:
                </p>
                <ul>
                  <li>
                    Child Labour Free India Campaign: for an amendment in Child
                    Labour (Prohibition & Regulation) Act, 1986 for total
                    abolition on child labour till the age of 14 years, in line
                    with ILO Convention 138.[6]
                  </li>
                  <li>Right to Education Campaign:</li>
                  <li>
                    In 2001, BBA had led the campaign demanding Fundamental
                    Right to Education, with over 180 Members of Parliament and
                    a 15,000 km. long march across the country, resulting in a
                    constitutional amendment and the Right of Children
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3>OUR SUPPORT TO STOP CHILD LABOUR:</h3>
      <div>
        <ul className={"items"}>
          {resources.map((item, index) => (
            <li key={index} className="item-container">
              <a href={item.url} style={{ fontSize: "1.5rem" }}>
                {item.name}
              </a>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Carrers;

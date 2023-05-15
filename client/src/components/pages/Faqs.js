import { useState } from "react";
import Footer from "../layout/footer";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const accordionItems = [
    {
      id: 1,
      question: "How the Compliance of the Provisions are ensured?",
      answer:
        "The owner, agent or manager of the mine is required to comply with the provisions of health and safety provisions of the Mines Act and the rules framed thereunder, as required under Section 18 of the Mines Act, 1952.",
    },
    {
      id: 2,
      question: "Who can raise an Industrial Dispute?",
      answer:
        "Any person who is a workman employed in an industry can raise an industrial dispute.  A workman includes any person (including an apprentice) employed in an industry to do manual, unskilled, skilled, technical, operational, clerical or supervisory work for hire or reward.  It excludes those employed in the Army, Navy, Air Force and in the police service, in managerial or administrative capacity.  Industry means any business, trade, undertaking, manufacture or calling of employers and includes any calling, service, employment, handicraft, or industrial occupation or avocation of workmen.",
    },
    {
      id: 3,
      question:
        "Can the applicant pay the fee through online payment mode or treasury challan to apply for registration and license under the Motor Transport Workers Act, 1961?",
      answer: "Yes, the applicant can use online/ offline payment mode.",
    },
    {
      id: 4,
      question:
        "Can third party verify the certificate issued by the Department?",
      answer:
        "Yes, the third party can verify the certificate by visiting the department's website www.labour.delhi.gov.in and enter the details of license at Verify License Details.",
    },
    {
      id: 5,
      question:
        "Is there any fine for delay in the submission of fee or application?",
      answer: "Yes",
    },
    {
      id: 6,
      question:
        "How to apply for approval of factory building plan under Factory Act, 1948?",
      answer:
        "The already registered factory owner will visit the website and login to his/her id. After login there is an option of Factory Building Plan at the top of the page. After logging the user has to fill the FORM 1..",
    },
  ];

  return (
    <>
      <div className="accordion">
        {accordionItems.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-item-header"
              onClick={() => handleItemClick(item.id)}
            >
              {item.question}
            </div>
            <div
              className={`accordion-item-body ${
                item.id === activeIndex ? "is-open" : ""
              }`}
            >
              <div className="accordion-item-body-content">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

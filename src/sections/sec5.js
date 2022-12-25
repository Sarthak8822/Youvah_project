import { useState, Fragment, useEffect } from "react";
import "./style.css";
import "./sec5.css";
import FAQ from "./FAQ";

function Sec5() {
  const [faqs, setFaqs] = useState([
    {
      id: 0,
      question: "How can I know my level of knowledge?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      id: 1,
      question: "Can I do it individually or only in a group?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      id: 2,
      question: "Can I do it individually or only in a group?",
      answer: "This many!",
      open: false,
    },
    {
      id: 3,
      question: "Can I do it individually or only in a group?",
      answer: "This many!",
      open: false,
    },
    {
      id: 4,
      question: "Can I do it individually or only in a group?",
      answer: "This many!",
      open: false,
    },
    {
      id: 5,
      question: "Can I do it individually or only in a group?",
      answer: "This many!",
      open: false,
    },
  ]);
  const toggleFAQ = (id) => {
    setFaqs((prev) => {
      const abc = prev.map((ele) => {
        if (ele.id === id) {
          ele.open = !ele.open;
        }
        return ele;
      });
      return [...abc];
    });
  };
  useEffect(() => {
    console.log(faqs);
  }, [faqs]);
  return (
    <div className="sec5">
      <div className="texts5">
        <div className="key5">MORE INFO</div>
        <div className="teachers">Common questions</div>
      </div>
      <section className="section5">
        {faqs.map((ele) => (
          <div className="component5" key={ele.id}>
            <div className="quests">{ele.question}</div>
            <div className="plus" onClick={() => toggleFAQ(ele.id)}>
              +
            </div>
            {ele.open && <div className="answer">{ele.answer}</div>}
          </div>
        ))}
      </section>
      {/* <div className="section5"> */}
      {/* {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))} */}
      {/* <div className="component5">
          <div className="quests">How can I know my level of knowlwdge?</div>
          <div className="plus" index= onClick={}>
            +
          </div>
        </div>
        <div className="component5">
          <div className="quests">
            Can I do it individually or only in a group?
          </div>
          <div className="plus">+</div>
        </div>
        <div className="component5">
          <div className="quests">How can I know my level of knowlwdge?</div>
          <div className="plus">+</div>
        </div>
        <div className="component5">
          <div className="quests">How can I know my level of knowlwdge?</div>
          <div className="plus">+</div>
        </div>
        <div className="component5">
          <div className="quests">How can I know my level of knowlwdge?</div>
          <div className="plus">+</div>
        </div>
        <div className="component5">
          <div className="quests">How can I know my level of knowlwdge?</div>
          <div className="plus">+</div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Sec5;

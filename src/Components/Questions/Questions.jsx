import React, { useState } from 'react';
import './Question.css';

const faqData = [
  {
    question: "What is Netflix?",
    answer: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    question: "What is Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
  },
  {
    question: "Where can i watch?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis corporis explicabo quos modi corrupti voluptatem accusantium voluptas quaerat ratione! Aspernatur quia voluptates est at commodi asperiores dolorem iusto iste beatae!"
  },
  {
    question: "How do i cancle?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reprehenderit!"
  },
  {
    question: "Is good for kids ?",
    answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel autem delectus recusandae culpa. Excepturi, maxime? Nemo corrupti facilis exercitationem."
  }
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
       <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>

          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
            <span>{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Questions;

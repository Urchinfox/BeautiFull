import { useState } from 'react';
import faq from '@/assets/images/services/faq.png';
import { faqData } from '@/pages/services/Resourse';
import PropTypes from 'prop-types';

export default function Faq({ btn }) {
  const [openItem, setOpenItem] = useState(null);  

  const handleToggle = (target) => {
    setOpenItem(openItem === target ? null : target);
  };

  return (
    <div className="accordion accordion-flush" id="accordionExample">
      {faqData[btn].map((item) => {
        return (
          <div className="accordion-item mb-16" key={item.target}>
            <div className="d-flex">
              <div className="accordion-img p-3 d-none d-lg-block">
                <img src={faq} className="img-fluid" alt="" />
              </div>

              <div className="accordion-content w-100">
                <h2 className="accordion-header border-bottom border-5" id="headingOne">
                  <button
                    className={`accordion-button ${openItem === item.target ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleToggle(item.target)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={item.target}
                  className={`accordion-collapse collapse ${openItem === item.target ? 'show' : ''}`}
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Faq.propTypes = {
  btn : PropTypes.string.isRequired,
};
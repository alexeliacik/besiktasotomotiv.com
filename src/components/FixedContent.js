import React from 'react';
import phoneCall from '../images/phone-call.svg';

const FixedContent = props => {
  let topContentClassName = ['fixed-content-top'];
  if (props.showContent) {
    topContentClassName.push('active');
  }

  return (
    <div className="fixed-content">
      <div className={topContentClassName.join(' ')}>
        <a href="tel:+904122371903">0412 237 19 03</a>
      </div>
      <div
        onClick={props.handleShowContent}
        className="fixed-content-bottom text-center"
      >
        <img src={phoneCall} alt="phone" />
      </div>
    </div>
  );
};

export default FixedContent;

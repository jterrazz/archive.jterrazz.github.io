import React, { useState, useEffect } from "react";
import Typist from 'react-typist';
import './Terminal.scss';

const Terminal = props => {
  const [showText, setShowText] = useState(false);

  const cursorOptions = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 500,
  };

  useEffect(() => {
    const terminalPositionTracker = () => {
      const wrappedElement = document.getElementById('terminal');
      if (wrappedElement.getBoundingClientRect().top <= 2 * window.innerHeight / 3) {
        setShowText(true)
        document.removeEventListener('scroll', terminalPositionTracker);
      }
    };

    document.addEventListener('scroll', terminalPositionTracker);
    return () => {
      document.removeEventListener('scroll', terminalPositionTracker);
    }
  }, []);

  const renderText = () => (
    <Typist cursor={cursorOptions}>
      <span> First Sentence </span>
      <Typist.Backspace count={8} delay={200} />
      <span> Phrase </span>
    </Typist>
  );

  return (
    <div id="terminal" className="terminal text-white small font-weight-600 p-3">
      <img src="/images/terminal-dots.png" alt="commands" width={53} className="mb-2"/>
      {showText ? renderText() : null}
    </div>
  )
};

export default Terminal

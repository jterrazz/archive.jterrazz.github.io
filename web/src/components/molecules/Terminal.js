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

  const commands = [
    {
      command: "whoami",
      result: "I am eeee"
    },
    {
      command: "ps -A",
      result: "I am eeee"
    },
    {
      command: "ls -a skills.txt",
      result: "I am eeee"
    },
    {
      command: "curl -g \"http://my-formation.com\"",
      result: "I am eeee"
    },
  ]

  const renderText = () => (
    <Typist cursor={cursorOptions}>
      {commands.map(cmd => {
        return (
          <span>
            <span>
              <span className="terminal-command--blue">~/jterrazz</span>
              <span className="terminal-command--purple"> > </span>
              {cmd.command}
            </span>
            <br/>
            <span className="terminal-command--gray">
              {cmd.result}
            </span>
            <br/>
          </span>
        )
      })}
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

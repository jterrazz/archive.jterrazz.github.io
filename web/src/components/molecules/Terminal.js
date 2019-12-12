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
      results: ["Terrazzoni Jean-Baptiste, 24yo from Corsica, France"]
    },
    {
      command: "ls -a skills.txt",
      results: ["Backend / Frontend / Software / Design"]
    },
    {
      command: "wget \"https://jterrazz.com/?formation=true\"",
      results: ["42 Paris School"]
    },
    {
      command: "ps -A",
      results: [
        "      PID TTY           TIME      CMD",
        "     042 ttys000    0:00.03 Travel",
        "     043 ttys000    0:00.03 Poker",
        " 18042 ttys000    0:00.03 New technologies",
        " 18043 ttys000    0:00.03 Finance"]
    },
  ]

  const renderText = () => (
    <Typist cursor={cursorOptions} avgTypingDelay={30}>
      {commands.map(cmd => {
        return (
          <span>
            <span>
              <span className="terminal-command--blue">~/jterrazz</span>
              <span className="terminal-command--purple"> > </span>
              {cmd.command}
            </span>
            <br/>
            {
              cmd.results.map(result => (
                <span className="terminal-command terminal-command--gray">
                  {result}
                  <br/>
                </span>
              ))
            }
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

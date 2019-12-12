import React, {useEffect, useState} from "react";

const ScrollBarPreview = props => {
  const [height, setHeight] = useState(0)
  const [progression, setProgression] = useState(0)
  let last_known_scroll_position = 0;
  let ticking = false;

  function doSomething(scroll_pos) {
    setHeight(window.innerHeight / (document.body.offsetHeight - window.innerHeight))
    setProgression(scroll_pos / document.body.offsetHeight - height * (1 - scroll_pos / document.body.offsetHeight))
  }

  const listenToScroll = function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  }

  useEffect(() => {
    listenToScroll()
    window.addEventListener('scroll', listenToScroll);
    // return () => {
    //   window.removeEventListener('scroll', listenToScroll);
    // }
  })

  return (
    <div className="bg-clear-2 position-relative overflow-hidden" style={{width: 4, height: 120}}>
      <div className="progression w-100 gd-0 position-absolute" style={{
        height: `${height * 100}%`,
        top: `${progression * 100}%`
      }}/>
    </div>
  )
}

export default ScrollBarPreview

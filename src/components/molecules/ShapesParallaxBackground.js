import React from "react";
import {Parallax} from "react-scroll-parallax";

const ShapesParallaxBackground = props => {
  return (
    <div style={{opacity: 0.3}}>
      <div className="position-absolute" style={{bottom: "15%", left: "20%"}}>
        <div className="position-relative">
          <div className="position-absolute" style={{bottom: 20, right: 20}}>
            <Parallax y={[40, -40]}>
              <img src="/images/shape-3.svg" width={200}/>
            </Parallax>
          </div>
          <Parallax y={[40, -20]}>
            <img src="/images/shape-1.svg" width={200}/>
          </Parallax>
        </div>
      </div>
      <div className="position-absolute" style={{left: -50, top: 0, transform: "rotate(-90deg)"}}>
        <Parallax x={[40, -40]}>
          <img src="/images/shape-2a.svg" width={200}/>
        </Parallax>
      </div>

      <div className="position-absolute" style={{bottom: "15%", right: "5%"}}>
        <div className="position-relative">
          <Parallax y={[70, -70]}>
            <img src="/images/shape-4.svg" width={250}/>
          </Parallax>
          <div className="position-absolute" style={{top: -30, right: -40}}>
            <div className="position-relative">
              <Parallax y={[70, -70]}>
                <img src="/images/shape-5a.svg" width={180}/>
              </Parallax>
              <div className="position-absolute" style={{top: 0, right: 40}}>
                <Parallax y={[200, -200]}>
                  <img src="/images/shape-5b.svg" width={50}/>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShapesParallaxBackground

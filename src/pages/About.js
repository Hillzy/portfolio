import React from "react";
import Tags from "../components/Tags";

import "./about.css";

const About = props => {
  return (
    <div className="About">
      <div className="code-wrapper">
        <div className="code-line">
          <div className="code-num">1</div>
          <div className="code-text">
            <span className="code-method">class </span>
            <span className="code-var">About </span>
            <span className="code-method">extends </span>
            <span className="code-var">Component </span> &#123;
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">2</div>
          <div className="code-text code-indent1">
            <span className="code-comment">/* A little bit about me,</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">3</div>
          <div className="code-text code-indent1">
            <span className="code-comment">General info */</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">4</div>
          <div className="code-text code-indent1">
            <span className="code-var">constructor</span>( ) &#123;
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">5</div>
          <div className="code-text code-indent2">
            <span className="code-alt">super</span>(props);
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">6</div>
          <div className="code-text code-indent2">
            <span className="code-alt">this.</span>state = &#123;
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">7</div>
          <div className="code-text code-indent3">
            <span className="code-alt">this.</span>name :
            <span className="code-string"> 'Liam Hillier'</span>,
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">8</div>
          <div className="code-text code-indent3">
            <span className="code-alt">this.</span>location :
            <span className="code-string"> 'Melbourne, Australia'</span>,
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">9</div>
          <div className="code-text code-indent3">
            <span className="code-alt">this.</span>email :
            <span className="code-string"> 'hillierliam37@gmail.com'</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">10</div>
          <div className="code-text code-indent2">&#125;</div>
        </div>
        <div className="code-line">
          <div className="code-num">11</div>
          <div className="code-text code-indent1">&#125;</div>
        </div>
        <div className="code-line">
          <div className="code-num">12</div>
          <div className="code-text code-indent1">
            <span className="code-comment">// My history</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">13</div>
          <div className="code-text code-indent1">
            <span className="code-method">workExperience</span>( ) &#123;
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">14</div>
          <div className="code-text code-indent2">
            <span className="code-var">return</span> (
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">15</div>
          <div className="code-text code-indent3">
            <span className="code-var">&#60;div&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">16</div>
          <div className="code-text code-indent4">
            <span className="code-var">&#60;li&#62;</span>2018 - Present:
            Website Developer at Vain Corp.
            <span className="code-var">&#60;/li&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">17</div>
          <div className="code-text code-indent4">
            <span className="code-var">&#60;li&#62;</span>2018-2019: Web Editor
            at IG Australia
            <span className="code-var">&#60;/li&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">18</div>
          <div className="code-text code-indent4">
            <span className="code-var">&#60;li&#62;</span>2015-2017: Website
            Developer at DC Website Solutions.
            <span className="code-var">&#60;/li&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">19</div>
          <div className="code-text code-indent4">
            <span className="code-var">&#60;li&#62;</span>2014-Present:
            Freelance front end develoepr
            <span className="code-var">&#60;/li&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">20</div>
          <div className="code-text code-indent3">
            <span className="code-var">&#60;/div&#62;</span>
          </div>
        </div>
        <div className="code-line">
          <div className="code-num">21</div>
          <div className="code-text code-indent2">)</div>
        </div>
        <div className="code-line">
          <div className="code-num">22</div>
          <div className="code-text code-indent1">&#125;</div>
        </div>
      </div>
    </div>
  );
};
export default About;

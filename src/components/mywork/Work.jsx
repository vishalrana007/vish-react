import React from 'react';
import './work.css';
import theme from '../../assets/theme-pattern.svg';
import work1_img from '../../assets/work1.png';
import work2_img from '../../assets/work2.png';
import work3_img from '../../assets/work3.png';

const mydata = [
  {
    w_no: 1,
    w_name: 'web developement',
    w_img: work2_img,
    link: 'https://vishalrana007.github.io/multi-pages-website/',
  },
  {
    w_no: 2,
    w_name: 'web developement',
    w_img: work3_img,
    link: 'https://vishalrana007.github.io/jcb-1/#', },
  {
    w_no: 3,
    w_name: 'web developement',
    w_img: work1_img,
    link: 'https://vishalrana007.github.io/4th-project/',   },
];

export const Work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="mywork-container">
        {mydata.map((item, index) => {
          return (
            <a href={item.link}>
              <img key={index} src={item.w_img} className='work_img' alt='workimage'/>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Work
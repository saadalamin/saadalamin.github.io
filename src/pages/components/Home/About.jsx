import React from "react";

function About() {
 React.useEffect(() => {
  /**
   * @description Switching tab
   */
  function switchingTab() {
   var a = document.querySelectorAll("#switch_btn button");
   if (a) {
    for (let e = 0; e < a.length; e++)
     a[e].onclick = function () {
      var t = document.querySelectorAll("#sections section");
      for (let o = 0; o < t.length; o++)
       if ("" != t[o].innerHTML) {
        (t[o].style.display = "none"),
         (document.querySelectorAll(
          "." + a[e].innerHTML.toLowerCase() + "-container"
         )[0].style.display = "block");
        var l = document.querySelectorAll("#switch_btn button");
        for (let e = 0; e < l.length; e++) l[e].classList.remove("active");
        a[e].classList.add("active");
       }
     };
   }
  }
  switchingTab();
 }, []);
 return (
  <>
   <div
    className="container text-center p-0 mt-5"
    id="switch_btn"
    role="group"
    aria-label="Basic outlined example"
   >
    <button
     className="btn btn-sm btn-outline-light active m-1"
     aria-current="page"
    >
     Experience
    </button>
    <button className="btn btn-sm btn-outline-light m-1">Skills</button>
    <button className="btn btn-sm btn-outline-light m-1">Education</button>
    <button className="btn btn-sm btn-outline-light m-1">Certifications</button>
    <button className="btn btn-sm btn-outline-light m-1">Publications</button>
    <button className="btn btn-sm btn-outline-light m-1">Awards</button>
    <button className="btn btn-sm btn-outline-light m-1">Languages</button>
   </div>
   <br />
   {/**-- __UNDER_SECTIONS --**/}
   <div id="sections">
    <section className="experience-container">
     {/**-- __EXPERIENCE --**/}
     <h4 className="title">Experience</h4>
     <div className="experience shadow">
      <div className="box d-flex">
       <img src="/images/icons/muktir_ghonta.jpg" alt="Muktir Ghonta" />
       <div className="details">
        <h3>Chief Executive Officer</h3>
        <p>Muktir Ghonta</p>
        <span>Nov 2018 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/videophics.jpg" alt="Videophics" />
       <div className="details">
        <h3>Owner & Founder</h3>
        <p>Videophics</p>
        <span>Jan 2019 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/qweekai.jpg" alt="Qweek AI" />
       <div className="details">
        <h3>Creative Department Head</h3>
        <p>Qweek AI</p>
        <span>Jan 2024 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/100mm.jpeg" alt="100 Million Mindset" />
       <div className="details">
        <h3>Photographer & Graphics Designer</h3>
        <p>100 Million Mindset</p>
        <span>Aug 2022 - Sep 2023</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/chcl.jpeg" alt="Chalkboard" />
       <div className="details">
        <h3>Graphics Design Artist</h3>
        <p>Chalkboard Communications Ltd</p>
        <span>Aug 2022 - Dec 2023</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/engoly.jpeg" alt="English Olympiad™" />
       <div className="details">
        <h3>Campus Ambassador</h3>
        <p>English Olympiad™</p>
        <span>Aug 2022 - Oct 2023</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/millatpc.jpg" alt="Millat Photography" />
       <div className="details">
        <h3>President & Founder</h3>
        <p>Millat Photography Club</p>
        <span>Nov 2022 - Aug 2023</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/cyc.jpg" alt="CYC" />
       <div className="details">
        <h3>Founder</h3>
        <p>Creative Youth Community</p>
        <span>Dec 2022 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/youthci.jpg" alt="Youth Ambassador" />
       <div className="details">
        <h3>Youth Ambassador</h3>
        <p>Youth Career Institute</p>
        <span>Jun 2023 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/dimff.jpg" alt="DIMFF" />
       <div className="details">
        <h3>Campus Ambassador</h3>
        <p>Dhaka International Mobile Film Festival</p>
        <span>Jan 2022 - March 2023</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/sps.jpg" alt="Special Stars" />
       <div className="details">
        <h3>Executive Director</h3>
        <p>Special Stars</p>
        <span>July 2023 - Present</span>
        <span>Dhaka, Bangladesh</span>
       </div>
      </div>
     </div>
    </section>
    {/**-- __SKILLS --**/}
    <section className="skills-container dn">
     <h4 className="title">Skills</h4>
     <div className="skills shadow">
      <ul className="">
       <li>Leadership</li>
       <li>Film Making</li>
       <li>Journalism</li>
       <li>Volunteering</li>
       <li>Graphic Design</li>
       <li>Cinematography</li>
       <li>Photography</li>
       <li>Performing arts</li>
       <li>Digital Marketing</li>
      </ul>
     </div>
    </section>
    {/**-- __EDUCATION --**/}
    <section className="education-container dn">
     <h4 className="title">Education</h4>
     <div className="education shadow">
      <div className="box d-flex">
       <img src="/images/icons/tmkm.jpg" alt="Education" />
       <div className="details">
        <h3>Tamirul Millat Kamil Madrasah</h3>
        <p>HSC Level</p>
        <span>2021 - 2023</span>
        <span>A+</span>
        <a
         href="https://www.linkedin.com/school/tmkm-edu/"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Visit
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/tmkm.jpg" alt="Education" />
       <div className="details">
        <h3>Tamirul Millat Kamil Madrasah</h3>
        <p>SSC Level</p>
        <span>2019 - 2021</span>
        <span>A+</span>
        <a
         href="https://www.linkedin.com/school/tmkm-edu/"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Visit
        </a>
       </div>
      </div>
     </div>
    </section>
    {/**-- __CERTIFICATIONS --**/}
    <section className="certifications-container dn">
     <h4 className="title">Certifications</h4>
     <div className="certifications shadow">
      <div className="box d-flex">
       <img src="/images/icons/google.jpg" alt="Certificate" />
       <div className="details">
        <h3>Foundation of UX Course</h3>
        <p>Google</p>
        <span>Issued: Feb 2023</span>
        <a
         href="https://coursera.org/verify/V4FPJQJYBDSC"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/google.jpg" alt="Certificate" />
       <div className="details">
        <h3>Fundamentals of Digital Marketing Course</h3>
        <p>Google Digital Garage</p>
        <span>Issued: May 2022</span>
        <a
         href="https://learndigital.withgoogle.com/link/1qsdpcedm9s"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/aspirelp.jpg" alt="Certificate" />
       <div className="details">
        <h3>Online Leadership Course</h3>
        <p>Aspire Institute</p>
        <span>Issued: Mar 2023</span>
        <a
         href="https://drive.google.com/file/d/1QzAbGU3-7bWX72cXot3slQStbll9TsgF/view?usp=share_link"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/eduonix.jpg" alt="Certificate" />
       <div className="details">
        <h3>Producing a Professional Short Film Course</h3>
        <p>Eduonix</p>
        <span>Issued: Jan 2022</span>
        <a
         href="https://www.eduonix.com/certificate/9c27b8cdf8"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/whocerti.jpg" alt="Certificate" />
       <div className="details">
        <h3>Social Prescribing Course</h3>
        <p>World Health Organization</p>
        <span>Issued: May 2022</span>
        <a
         href="https://openwho.org/verify/xopap-zoket-zezat-hasok-tevol"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/hplife.jpg" alt="Certificate" />
       <div className="details">
        <h3>Social Entrepreneurship Course</h3>
        <p>Hp Life</p>
        <span>Issued: May 2022</span>
        <a
         href="https://drive.google.com/file/d/1tUF5ofz79vGN2C6-hzK427T-Uu9fvl6j/view?usp=sharing"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/openlearn.jpg" alt="Certificate" />
       <div className="details">
        <h3>Philosophy Course : the nature of persons</h3>
        <p>The Open University</p>
        <span>Issued: Jun 2022</span>
        <a
         href="https://drive.google.com/file/d/10mPZCbPxY8HWMZyMRq4Z0V0ve6fXMLd9/view?usp=sharing"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/openlearn.jpg" alt="Certificate" />
       <div className="details">
        <h3>Emotion Course : an introductory picture</h3>
        <p>The Open University</p>
        <span>Issued: Jun 2022</span>
        <a
         href="https://drive.google.com/file/d/1S8vRBeDL5r8a37Y5oRXEzg4ooM2ADrTO/view?usp=sharing"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show certificate
        </a>
       </div>
      </div>
     </div>
    </section>
    {/**-- __PUBLICATIONS --**/}
    <section className="publications-container dn">
     <h4 className="title">Publications</h4>
     <div className="publications shadow">
      <div className="box d-flex">
       <img src="/images/icons/publi1.png" alt="Publications" />
       <div className="details">
        <h3>The mysteries of dark matter and dark energy</h3>
        <p>Saad Al Amin</p>
        <span>Published on : Feb 20, 2023</span>
        <span>Academia</span>
        <a
         href="https://www.academia.edu/97167491/The_mysteries_of_dark_matter_and_dark_energy?source=swp_share"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show the paper
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/publi2.png" alt="Publications" />
       <div className="details">
        <h3>Ethics & Current Generation's relationship Culture</h3>
        <p>Saad Al Amin</p>
        <span>Published on : Mar, 2023</span>
        <span>Researchgate</span>
        <a
         href="https://www.researchgate.net/publication/369618403_Ethics_Current_Generation's_relationship_Culture"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show the paper
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/publi3.png" alt="Publications" />
       <div className="details">
        <h3>Bangladeshi Education System & International System's Gap</h3>
        <p>Saad Al Amin</p>
        <span>Published on : Mar, 2023</span>
        <span>Researchgate</span>
        <a
         href="https://www.researchgate.net/publication/369618543_Bangladeshi_Education_System_International_System's_Gap"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show the paper
        </a>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/publi4.png" alt="Publications" />
       <div className="details">
        <h3>The Spiritual and Cultural Significance of Ramadan</h3>
        <p>Saad Al Amin</p>
        <span>Published on : Mar, 2023</span>
        <span>Researchgate</span>
        <a
         href="https://www.researchgate.net/publication/369618517_The_Spiritual_and_Cultural_Significance_of_Ramadan"
         target="_blank"
         className="btn btn-sm btn-primary"
        >
         Show the paper
        </a>
       </div>
      </div>
     </div>
    </section>
    {/**-- __AWARDS --**/}
    <section className="awards-container dn">
     <h4 className="title">Awards</h4>
     <div className="awards shadow">
      <div className="box d-flex">
       <img src="/images/icons/gloclawa.jpg" alt="Award" />
       <div className="details">
        <h3>Glocal Teen Hero Top Six Finalist 2022</h3>
        <p>Glocal Pvt. Ltd</p>
        <span>Issued: Dec 2022</span>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/elanreco.jpg" alt="Award" />
       <div className="details">
        <h3>Best Designer Award</h3>
        <p>Elan Records</p>
        <span>Issued: Feb 2021</span>
       </div>
      </div>
     </div>
    </section>
    {/**-- __LANGUAGES --**/}
    <section className="languages-container dn">
     <h4 className="title">Languages</h4>
     <div className="languages shadow">
      <div className="box d-flex">
       <img src="/images/icons/bnlang.png" alt="Language" />
       <div className="details">
        <h3>Bangla</h3>
        <p>Native or bilingual proficiency</p>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/enlang.png" alt="Language" />
       <div className="details">
        <h3>English</h3>
        <p>Professional working proficiency</p>
       </div>
      </div>
      <hr />
      <div className="box d-flex">
       <img src="/images/icons/hnlang.png" alt="Language" />
       <div className="details">
        <h3>Hindi</h3>
        <p>Elementary proficiency</p>
       </div>
      </div>
     </div>
    </section>
   </div>
   <br />
   <br />
  </>
 );
}

export default About;

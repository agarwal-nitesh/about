import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "java_skill", content: "Java", percentage: "80%", value: "80" },
        { id: "python_skill", content: "Python", percentage: "70%", value: "70" },
        {
          id: "go_skill",
          content: "Golang",
          percentage: "60%",
          value: "60"
        },
        { 
          id: "ml_skill", 
          content: "AI-ML", 
          percentage: "60%", 
          value: "60" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Software Engineer."
        },
        {
          id: "second-p-about",
          content:
            "I love coding. I sometimes teach programming, machine learning, and secondary mathematics. Apparently, I am not too bad."
        },
        {
          id: "third-p-about",
          content:
            "As a mentor, I have learned a couple of things, be kind, and a nice penned note hits all the right notes. My note to self says two things, procrastination sucks, and discipline is overrated. I am not a morning person, but I find an occasional early morning walk quite refreshing."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

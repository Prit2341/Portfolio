import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Tech in Data Science</h4>
                <h5>Pandit Deendayal Energy University (PDEU)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing M.Tech in Data Science at PDEU, Gandhinagar. Admitted via
              GATE 2025. Focused on real-time ML systems, big data pipelines, and
              deploying production-grade inference services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Feynaa Lab</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Collected and cleaned datasets, handled missing values and outliers.
              Ran EDA in Python to surface patterns and guide feature selection.
              Built and compared ML models, and contributed to feature engineering
              across multiple tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>ITM, SLS Baroda University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed B.Tech in Information Technology from SLS Baroda
              University, Vadodara (Oct 2020 – Jun 2024). Built a strong
              foundation in software development and data-driven problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Science M.Tech student at PDEU, focused on real-time fraud detection
          and scalable ML pipelines. I build systems that go from raw streaming data
          to deployed inference — using Spark, Kafka, and FastAPI — including a
          GBT-based fraud classifier running on live Kafka transactions with
          near-real-time scoring. Also work on computer vision (super-resolution,
          virtual try-on) and NLP (multilingual fake news detection).
        </p>
      </div>
    </div>
  );
};

export default About;

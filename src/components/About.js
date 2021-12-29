import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h2>About Us</h2>
      <p>
        Task Tracker App created in React JS by implementing useContext to
        maintain the state of App.
      </p>
      <br />
      <Link to="/">Go Back</Link>
    </>
  );
};

export default About;

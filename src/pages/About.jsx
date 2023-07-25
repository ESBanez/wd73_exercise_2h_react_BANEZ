import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <h1>This is About Page</h1>
    </>
  );
}

export default About;

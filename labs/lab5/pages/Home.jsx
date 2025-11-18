

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

     <header className="header bg-primary text-white py-4 shadow-sm">
        <h1 className="text-center fw-bold display-5">Welcome to My Portfolio</h1>
      </header>

      {/* MAIN SECTION */}
      <section id="home" className="container my-5">
        <div className="p-4 p-md-5 bg-white rounded-4 shadow home-container">

          <p className="home-subtitle">
            Hi there, my name is <strong>Praise Babalola</strong> and I am pursuing a 
            Bachelor of Applied Computer Science at Dalhousie University. Throughout my 
            academic journey, I have always sought to solve intricate problems, which 
            eventually led me down the computer science path. As these are still the early 
            days of my career, I am eager to connect with others, collaborate on innovative 
            projects, and contribute meaningfully to a company's mission.
          </p>

        </div>
      </section>


    </>
  );
}
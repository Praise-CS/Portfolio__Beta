

import Footer from "../components/Footer";

export default function About() {
  return (
    <>
    <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

   
      <section id="about" className="py-5 bg-light">
        <div className="container">
 
           <h1 className="text-center text-primary mb-5">About Me</h1>

        
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
             <div className="card-body">
             <h2 className="card-title text-secondary">Experience</h2>
            <ul className="list-unstyled ps-3">
            <li>• Tech & Program Supervisor</li>
             <li>• Tech & Youth Supervisor</li>
               <li>• Counselor Assistant</li>
                  </ul>
         </div>
                    </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
           <div className="card-body">
          <h2 className="card-title text-secondary">Education</h2>
           <ul className="list-unstyled ps-3">
           <li>• Dalhousie University — BASc</li>
              <li>• Minor in Management</li>
                  </ul>
                </div>
              </div>
              </div>
          </div>

     
          <div className="text-center mb-4">
            <p className="text-muted mb-1">Explore My</p>
            <h1 className="text-primary">Skill Sets</h1>
          </div>

          <div className="row g-4">
           
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="card-title text-secondary">Technical</h2>
                  <ul className="list-unstyled ps-3">
                    <li>• HTML</li>
                    <li>• CSS</li>
                    <li>• OOP</li>
                    <li>• Java</li>
                    <li>• Git</li>
                    <li>• Linux</li>
                    <li>• Agile</li>
                  </ul>
                </div>
                </div>
            </div>

            {/* Interpersonal Skills */}
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="card-title text-secondary">Interpersonal</h2>
                  <ul className="list-unstyled ps-3">
                    <li>• Strong Communication</li>
                    <li>• Collaboration Skills</li>
                    <li>• Time Management</li>
                    <li>• Problem Solving</li>
                    <li>• Self-Management</li>
                    <li>• Creativity</li>
                    <li>• Bilingual (English & Yoruba)</li>
                    <li>• Team Player</li>
                  </ul>
                  </div>
                </div>
               </div>
               </div>
               </div>
      </section>

      
    </>
  );
}

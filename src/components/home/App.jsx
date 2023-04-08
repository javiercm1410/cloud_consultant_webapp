import React from "react";
import { Link } from 'react-router-dom';


const App = () => {
    return  <section className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-main">
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Cloud Consultor</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">A web-based cloud architecture design tool for: AWS, Azure and GPC.</p>         
        <Link to="/questions" className="p-bt btn btn-light px-3 gap-2">Start Project </Link>
      </div>
    </div>
  </section>
}

export default App;

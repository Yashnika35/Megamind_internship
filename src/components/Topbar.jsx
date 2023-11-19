import { Link } from "react-router-dom";
import { default as AdmissionEnquiry } from "./AdmissionEnquiry";

const Topbar = () => {
  return (
    <header className="text-white text-sm position:fixed w-full m-0 bg-[#213557]">
      {/* Top blue navigation bar */}
      <div className="flex justify-between p-1 px-6">
        <div className="flex">
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            sahyadri@sahyadri.edu.in
          </a>
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            +91 824 2277222
          </a>
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            NIRF Info
          </a>
          <Link
            to="/dashboard"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex">
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            Mandatory Disclosures
          </a>
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            ARIIA-2021
          </a>
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            MBA
          </a>
          <a
            href="#"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            Admission Procedure
          </a>

          <Link
            to="/admissionenquiry"
            className="text-white decoration-0 hover:text-lime-400 p-1 px-3"
          >
            <strong className="animate-pulse">ADMISSION OPEN</strong>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Topbar;

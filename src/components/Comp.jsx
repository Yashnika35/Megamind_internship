const Comp = () => {
  return (
    <div className="flex justify-between w-full">
      {/* <!--faculty--> */}
      <div className="w-9/12 h-full p-20 bg-white text-black text-lg pl-40">
        <p>
          Over 250 companies visit the campus every year for recruitment.
          <br />
          Some of the highest packages are offered by - Microsoft 40LPA, Adobe
          27.7 LPA, Cohesity 24.5 LPA, SPG - 23 LPA, Amazon 16 LPA, Toppr - 15.5
          LPA, Anglo Eastern -15 LPA, Money View - 12 LPA, Juspay technologies-
          12 LPA, HSBC -12 LPA, SAP - 10 LPA, Accolite Software - 10 LPA. The
          average package is 4 LPA .
        </p>
        <br />
        <p className="opp">
          The Placement Department also actively takes part in providing{" "}
          <a href="" className="text-[#006eff] no-underline">
            internship opportunities
          </a>{" "}
          to the students. The placement Department has also set up Aptitude Lab
          for continual assessment of students.
        </p>
        <br />
        <p className="text-[#669192] font-semibold">
          <em>
            The placement office ensures the best arrangement for the
            recruiters. Student volunteers make the necessary arrangements on
            the day of the Company visit.{" "}
          </em>
        </p>
        <br />
        <p className="text-[#669192] font-semibold">
          <em>
            "The academic year 2020-21 has reaped rich rewards with a sizeable
            number of students recruited by 200+ leading companies"{" "}
          </em>
        </p>
      </div>
      <div className="w-3/4 h-full p-20 bg-white">
        <img src="./img/grp_pic.png" alt="" />
      </div>
    </div>
  );
};
export default Comp;

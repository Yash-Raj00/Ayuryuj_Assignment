"use client";
import "./App.css";
import { CardContainer } from "./components/Card";

function App() {
  const drData = {
    name: "Dr. Tony Stark",
    specialities: ["Billionaire", "Playboy", "Philanthropist", "Genius"],
    qulifications: ["BDS", "MDS"],
    on: "Paedodontics And Preventive Dentistry",
    experience: 25,
    likes: 99,
    patientsCount: 2815,
    ratings: 4.9,
    brand: "Stark Industries",
    address: "California, USA",
    slots: {
      Today: 4,
      Tomorrow: 16,
      "30 Aug": 16,
      "31 Aug": 16,
      "1 Sep": 16,
      "2 Sep": 16,
    },
    timings: [
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
    ],
  };
  return (
    <>
      <div className="">
        <header className="bg-[#e1f5ff]">
          <div className="container max-w-[40rem] mx-auto">
          <div className="icons text-white text-xs flex">
            <span className="flex flex-col justify-center items-center bg-[#28318c] border-r border-[#09127a] sm:rounded-bl px-4 py-1">
              <span>practo</span>
              <span className="text-[#19a0da] text-sm">DENTAL</span>
            </span>
            <span className="flex flex-col justify-center items-center bg-[#28318c] border-l border-[#09127a] rounded-br px-4">
              Clinic
            </span>
          </div>

          <div className="heroSection container  p-5 flex justify-between font-semibold">
            <div className="about w-[50%] flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{drData.name}</h3>
              <p className="info text-xs">
                {drData.specialities.map((sp, i) => (
                  <span key={i}>
                    {sp + (i === drData.specialities.length - 1 ? "" : ", ")}
                  </span>
                ))}
              </p>
              <p className="info text-xs">
                {drData.qulifications.map((q, i) => (
                  <span key={i}>
                    {q + (i === drData.qulifications.length - 1 ? "" : ", ")}
                  </span>
                ))}
                {" - "}
                {drData.on}
              </p>
              <p className="experience font-bold text-sm">
                {drData.experience} Years Experience
              </p>
            </div>
            <div className="avatar my-auto">
              <img
                src="/avatar.jpg"
                alt="avatar"
                className="rounded-full ring w-32 h-32 hover:scale-105 transition-all"
              />
            </div>
          </div>
          </div>
        </header>
        <section className="p-5 mb-14 flex flex-col items-center gap-5">
          <div className="testimonial w-full sm:w-[37rem] flex justify-between font-semibold ">
            <div className="text-xs text-center">
              <p className="text-3xl font-semibold flex items-center">
                <span>
                  <img
                    src="/like.png"
                    alt="star"
                    className="w-7 h-auto mx-0.5"
                  />
                </span>
                {drData.likes}%
              </p>
              <p>Patient Recommendation</p>
              <p className="underline">
                {drData.patientsCount} Patient Stories
              </p>
            </div>
            <span className="w-[2px] bg-gray-200"></span>
            <div className="text-xs text-center">
              <p className="text-3xl font-semibold flex items-center justify-center">
                <span>
                  <img
                    src="/starBlue.png"
                    alt="star"
                    className="w-7 h-auto mx-0.5"
                  />
                </span>
                {drData.ratings}
                <span className="text-xl pt-1">/5</span>
              </p>
              <p>Patient Recommendation</p>
              <p className="underline">Based on Audit</p>
            </div>
          </div>
          <div className="cards w-full lg:w-[60rem] flex items-center justify-center flex-wrap gap-4">
            {[1,2].map((_, i) => (
              <CardContainer
                key={i}
                brandName={drData.brand}
                address={drData.address}
                slots={drData.slots}
                timings={drData.timings}
                className="w-full sm:w-[350px] md:w-[300px]"
              />
            ))}
          </div>
        </section>
        <footer className="bg-white/70 backdrop-blur-sm px-5 py-2 text-xs fixed bottom-0 flex justify-center items-center w-full">
          <div className="flex justify-between items-center w-full md:w-[40rem]">
            <div className="">
              <div className="font-bold">Clinic appointment</div>
              <div className="text-[#23c723] font-semibold">
                Available Today
              </div>
            </div>
            <button className="book text-white bg-[#19a0da] hover:bg-[#3591c7] active:bg-[#19a0da]/60 px-6 py-3 rounded-lg text-sm transition-all">
              Book Clinic Visit
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

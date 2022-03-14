import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/1080x1080-Find_the_Fiend_Instagram.png";

const Example = () => {
  const eventname = "Find the Fiend";
  const highlight = "Treasure Hunt";
  const details = `The cacophony of voices slowly goes down. A gripping silence engulfs the room. The crowd holds their collective breath as you, our modern-day Sherlock, get to work along with your fellow sleuths. 
  Be a part of this team-based competition where participants play detective and investigate a crime to solve the mystery. 
  Solve puzzles, figure out riddles and find clues as the mystery unravels, and find the culprit with the panache of an MI6 agent.`;
  const date = "April 1st, 2022";
  const time = "4:30PM";
  const org1name = "Prashant Choudhary";
  const org1mail = "prashantchoudhary20bcs71@iiitkottayam.ac.in";
  const org1phone = "7017536979";
  const org2name = "Zishan Ahmad";
  const org2mail = "zishanahmad20bcs78@iiitkottayam.ac.in";
  const org2phone = "8405861132";
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLSeIxU_FI7LMZqYxvteJK43pDxYOrLtdvUzL0tCeUK9m3qgxUw/viewform";

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36 space-y-10">
          <div className=" w-full flex flex-col space-y-10 sm:flex-row justify-around mx-auto ">
            <TextBox heading={eventname} content={highlight} />

            <div className="flex flex-col items-center justify-around">
              <img
                src={image}
                alt="event poster"
                className="w-48 h-48 lg:w-72 lg:h-72 mx-auto rounded-2xl mb-5"
              ></img>
              <CommonButton link={link} />
            </div>
          </div>
          <div className="lg:px-36 ">
            <TextBox heading="Details" content={details} />
            <TimeBox date={date} time={time} />
            <TextBox
              heading="Contact The Organizers"
              content="Want more details related to this event, feel free to contact the Event Organiser."
              className="pb-4"
            />
            <Orglist
              org1={org1name}
              org1det={org1mail}
              ph1={org1phone}
              org2={org2name}
              org2det={org2mail}
              ph2={org2phone}
            />
          </div>
        </div>
        <div className="pt-48 lg:pt-36">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Example;
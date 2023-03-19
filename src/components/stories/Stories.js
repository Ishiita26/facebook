import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";
import Person from "../../assets/person/user.JPG";
import Person1 from "../../assets/person/person1.jpg"
import Person2 from "../../assets/person/person2.jpg"
import Person3 from "../../assets/person/person3.jpg"
import Person4 from "../../assets/person/person4.jpg"
import Upload from "../../assets/person/upload.png"

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Person} alt="" className="storyProfile" />
        <img src={Person} alt="" className="storybackground" />
        <img src={Upload} alt="" className="storyadd" />
      </div>
      
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Person1} alt="" className="storyProfile" />
        <img src={Person1} alt="" className="storybackground" />
       
      </div>
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Person2} alt="" className="storyProfile" />
        <img src={Person2} alt="" className="storybackground" />
       
      </div>
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Person3} alt="" className="storyProfile" />
        <img src={Person3} alt="" className="storybackground" />
       
      </div>
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Person4} alt="" className="storyProfile" />
        <img src={Person4} alt="" className="storybackground" />
       
      </div>
     

      {/* {Users.map((u) => {
       return <Storycard key={u.id} user={u} />
      })} */}
    </div>
  );
};

export default Stories;

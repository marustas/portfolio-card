import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return <img src="profile.jpg" alt="profile" className="avatar" />;
};

const Skill = (props) => {
  return (
    <div className="skill">
      <span>{props.skill}</span>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" />
      <Skill skill="HTML/CSS" />
      <Skill skill="Python" />
      <Skill skill="C/C++" />
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Stanisalu Marudau</h1>
      <p>
        Hi, I'm a determined and goal-orineted Software engineer in learning,
        studying at VGTU, participant of NWERC22 semi-finals and organizer of
        startup AI2tor. I enjoy playing tennis and basketball.
      </p>
    </div>
  );
};
export default App;

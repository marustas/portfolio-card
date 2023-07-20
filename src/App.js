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
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" color="#61DAFB" />
      <Skill skill="HTML/CSS" color="#E34C26" />
      <Skill skill="Python" color="#FFD43B" />
      <Skill skill="C/C++" color="#649AD2" />
      <Skill skill="JS" color="#F7DF1E" />
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Stanislau Marudau</h1>
      <p>
        Hi, I'm a determined and goal-orineted Software engineer in learning,
        studying at VGTU, participant of NWERC22 semi-finals and organizer of
        startup AI2tor. I enjoy playing tennis and basketball.
      </p>
    </div>
  );
};
export default App;

import "./App.css";
import ProfileCard from "./ProfileCard";

function App(){
  const users = [
    { id: 1, name: "Tanmay", job: "Frontend Dev", isVerified: true }, // Verified
    { id: 2, name: "Amit", job: "Backend Dev", isVerified: false },
    { id: 3, name: "Sarah", job: "UI Designer", isVerified: true },   // Verified
    { id: 4, name: "Rohan", job: "Project Manager", isVerified: false }
  ];
  return(
    <div className="container">
      <h1>My Team Directory</h1>
      <div className="card-grid">
        {users.map((user)=>(
          <ProfileCard 
            key={user.id}      // React needs a unique ID for tracking
            name={user.name} 
            jobTitle={user.job} 
            isVerified={user.isVerified}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
import { useState } from "react";
import "./Register.css";

const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
 
const HOBBY_OPTIONS = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" },
];
 
const ROLE_OPTIONS = [
  { label: "General Staff", value: "general staff" },
  { label: "Developer", value: "developer" },
  { label: "System Analyst", value: "system analyst" },
];
 
export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");
 
  function onHobbiesToggle(event) {
    const value = event.target.value;
    const checked = event.target.checked;
 
    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((item) => item !== value));
    }
  }
 
  return (
    <div className="register-container">
      <h2>Registration Form</h2>
 
      <div className="form-group">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label>Firstname</label>
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label>Lastname</label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label>Gender</label>
        {GENDER_OPTIONS.map((opt) => (
          <label key={opt.value} className="option">
            <input
              type="radio"
              name="gender"
              value={opt.value}
              checked={gender === opt.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {opt.label}
          </label>
        ))}
      </div>
 
      <div className="form-group">
        <label>Hobbies</label>
        {HOBBY_OPTIONS.map((opt) => (
          <label key={opt.value} className="option">
            <input
              type="checkbox"
              value={opt.value}
              checked={hobbies.includes(opt.value)}
              onChange={onHobbiesToggle}
            />
            {opt.label}
          </label>
        ))}
      </div>
 
      <div className="form-group">
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {ROLE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
 
      <hr />
 
      <div className="result">
        <p><b>Username:</b> <span>{username}</span></p>
        <p><b>Firstname:</b> <span>{firstname}</span></p>
        <p><b>Lastname:</b> <span>{lastname}</span></p>
        <p><b>Gender:</b> <span>{gender}</span></p>
        <p><b>Hobbies:</b> <span>{hobbies.join(", ")}</span></p>
        <p><b>Role:</b> <span>{role}</span></p>
      </div>
    </div>
  );
}
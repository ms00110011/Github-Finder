import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Search.module.css";
import { TextField } from "@mui/material";
import SearchCard from "./SearchCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Search = () => {
  const [data, setData] = React.useState([]);
  const [inp, setInp] = React.useState("");

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inp==="") {
      alert("Please Enter something")
    }

    else {
      
    fetch(`https://api.github.com/search/users?q=${inp}`, {
      headers: {
        Authorization: "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",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.items));

    console.log(data);
    }

  };

  return (
    <div>
      <div className={styles.headWrapper}>
        <div style={{ padding: "20px" }}>
          <div>
            <p className={styles.heading}>
              <GitHubIcon sx={{ fontSize: "35px", color: "black" }} /> GitHub
              Profile Viewer
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              id="inputText"
              onChange={handleChange}
              className={styles.inputBox}
              placeholder="Search User"
              sx={{
                width: "350px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "0",
              }}
            />

            <button style={{ height: "35px", width: "40px" }} type="submit">
              <ArrowForwardIcon sx={{ fontSize: "10px" }} />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.ProfilesWrapper}>
        {data.map((item) => (
          <SearchCard name={item.login} img={item.avatar_url}  />
        ))}
      </div>
    </div>
  );
};

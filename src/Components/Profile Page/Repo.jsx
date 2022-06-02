import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Repo.module.css";

export const Repo = ({ rname, desc }) => {
  return (
    <div style={{marginBottom:"20px"}}>
      <div className={styles.RepoWrapper}>
        <div>
          <Avatar>
            <img
              style={{ width: "100%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/800px-Google_Contacts_icon.svg.png"
              alt=""
            />
          </Avatar>
        </div>
        <div>
          <p>
            <b>{rname}</b>
          </p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

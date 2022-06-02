import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Profile.module.css";
import { Avatar, recomposeColor } from "@mui/material";
import { Repo } from "./Repo";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";

export const Profile = () => {
  const [user, setUser] = React.useState({});
  const [repo, setRepo] = React.useState([]);

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    getUser();
    getRepos();
  }, []);

  const getUser = () => {
    fetch(`https://api.github.com/users/${id}`, {
      headers: {
        Authorization: "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",
      },
    })
      .then((res) => res.json())
      .then((res) => setUser(res));
  };

  const getRepos = () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
    });

    fetch(`https://api.github.com/users/${id}/repos?${params}`, {
      headers: {
        Authorization: "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",
      },
    })
      .then((res) => res.json())
      .then((res) => setRepo(res));
  };

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <div className={styles.WrapperPS}>
        <Link style={{textDecoration:"none"}} to={"/"}>
          <p style={{ textAlign: "left", fontSize: "18px", color: "#606060" }}>
            <ArrowBackIcon sx={{ fontSize: "18px" }} /> Back
          </p>
        </Link>

        <div className={styles.avatarW}>
          <div>
            <Avatar sx={{ height: "100px", width: "100px" }} variant="rounded">
              <img src={user.avatar_url} style={{ width: "100%" }} alt="" />
            </Avatar>
          </div>
          <div
            style={{ textAlign: "left", color: "#606060", paddingLeft: "20px" }}
          >
            <h2>{user.login}</h2>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.innerBlock}>
          <p style={{ color: "#606060" }}>Bio</p>
          <p>{user.bio}</p>
        </div>

        <div className={styles.innerBlock}>
          <p style={{ color: "#606060" }}>Works at</p>
          <p>{user.company}</p>
        </div>

        <div className={styles.repo}>
          <div className={styles.innerBlock}>
            <p style={{ color: "#606060" }}>Repositories</p>
            <p>{user.public_repos}</p>
          </div>

          <div className={styles.innerBlock}>
            <p style={{ color: "#606060" }}>Followers</p>
            <p>{user.followers}</p>
          </div>
        </div>

        <div className={styles.innerBlock}>
          <p style={{ color: "#606060" }}>Recent Repositories</p>
          <p></p>
        </div>
      </div>

      {repo.map((item, i) => (
        <Repo rname={item.name} desc={item.description} />
      ))}
    </div>
  );
};

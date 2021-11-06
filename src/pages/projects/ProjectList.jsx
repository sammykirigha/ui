import React, { Component, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import ProjectSingleCard from "./ProjectSingleCard";
import Wrapper from "../../components/layouts/Wrapper";
import { getProjects } from "../../redux/actions/project";
import { loadAllUsers } from "../../redux/actions/users";

const ProjectList = () => {
  // updateSearch = event => {
  //     this.setState({search: event.target.value})
  // }

  const history = useHistory();
  const { user } = useSelector((state) => state.log);
  const { projects, loading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const getTeamLead = (id) => {
    return users.find((user) => user.id === id);
  };

  // const p = projects.map((proj) => proj.id);
  // console.log(getTeamLead(p));

  useEffect(() => {
    dispatch(loadAllUsers());
  }, []);

  useEffect(() => {
    dispatch(getProjects(user.id));
  }, [dispatch]);

  if (loading)
    return (
      <Wrapper>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div>
        <SearchComponent />
        {projects.length === 0 ? (
          <div style={{ margin: "10%", fontSize: "16px" }}>
            <div
              className="ui centered raised card"
              style={{ padding: "20px", width: "450px", height: "100%" }}
            >
              <p>
                No recent projects available, visit
                <Link to="/newproject"> this page </Link>
                to create the most recent projects
              </p>
            </div>
          </div>
        ) : (
          <div className="ui three cards grey">
            {projects?.map((project, index) => (
              <ProjectSingleCard
                project={project}
                key={project.id}
                team_lead_name={getTeamLead(project.team_lead_id)}
              />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectList;

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PersonalAccountContent from "../../../components/Layout/PersonalAccountContent/PersonalAccountContent";
import styles from "./EditPage.module.scss";

const EditPage = () => {
  const { id } = useParams();
  const location = useLocation();

  console.log(JSON.parse(location.state));
  return <PersonalAccountContent>Edit {id}</PersonalAccountContent>;
};

export default EditPage;

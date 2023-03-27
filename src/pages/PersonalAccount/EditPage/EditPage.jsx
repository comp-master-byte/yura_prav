import React from "react";
import PersonalAccountContent from "../../../components/Layout/PersonalAccountContent/PersonalAccountContent";
import EditLawyerModule from "../../../modules/EditLawyerModule/EditLawyerModule";

const EditPage = () => {
  return (
    <PersonalAccountContent>
      <EditLawyerModule />
    </PersonalAccountContent>
  );
};

export default EditPage;

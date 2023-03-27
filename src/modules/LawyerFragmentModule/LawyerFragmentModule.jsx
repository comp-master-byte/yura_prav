import React from "react";
import styles from "./LawyerFragmentModule.module.scss";
import { observer } from "mobx-react-lite";
import { useLawyerHelpItem } from "./hooks/useLawyerHelpItem";
import LawyerAnswersList from "./components/LawyerAnswersList/LawyerAnswersList";
import LawyerAnswersHeader from "./components/LawyerAnswersHeader/LawyerAnswersHeader";
import LawyerNavigationButtons from "./components/LawyerNavigationButtons/LawyerNavigationButtons";

const LawyerFragmentModule = () => {
  const {
    lawyer,
    onSelectAnswer,
    goBack,
    toEditLawyerPage,
    returnToFirstAnswer,
  } = useLawyerHelpItem();

  return (
    <div className={styles.lawyerHelpItem}>
      <div className={styles.scrollbar}>
        <LawyerAnswersHeader
          title={lawyer.lawyerHelp?.message}
          answersLength={lawyer.lawyerHelp?.answers?.length}
        />
        <LawyerAnswersList
          lawyerAnswers={lawyer.lawyerHelp?.answers}
          onSelectAnswer={onSelectAnswer}
          returnToFirstAnswer={returnToFirstAnswer}
        />
        <LawyerNavigationButtons
          nodeId={lawyer.lawyerHelp?.node_id}
          goBack={goBack}
          toEditLawyerPage={toEditLawyerPage}
        />
      </div>
    </div>
  );
};

export default observer(LawyerFragmentModule);

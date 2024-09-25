import Options from "./Options";

/* eslint-disable react/prop-types */
function Question({ question }) {
  return (
    <div>
      <h4>{question?.question}</h4>

      <Options question={question}/>
    </div>
  );
}

export default Question;

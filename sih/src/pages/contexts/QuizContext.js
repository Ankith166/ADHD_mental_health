import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [
    // {
    //   question:
    //     "Has a doctor ever told you that your child had anxiety/depression problems ?",
    //   options: ["Yes", "No"],
    // },
    {
      question: "does any blood-relative have ADHD?",
      options: ["no", "yes"],
    },
    // {
    //   question: "please enter Child age in years",
    //   options: ["1-3", "4-6", "7-10"],
    // },
    // {
    //   question: "please enter Sex of the Child",
    //   options: ["Male", "Female"],
    // },
    {
      question:
        "Does not pay attention to details or makes careless mistakes, for example homework",
      options: ["never", "occasionaly", "often", "very often"],
    },

    {
      question: "Has difficulty sustaining attention to tasks or activities",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Does not seem to listen when spoken to directly",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question:
        "Does not follow through on instruction and fails to finish schoolwork (not due to oppositional behavior or failure to understand)",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Has difficulty organizing tasks and activities",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question:
        "Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question:
        "Loses things necessary for tasks or activities (school assignments,pencils, or books)",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Is easily distracted by extraneous stimuli ",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Is forgetful in daily activities",
      options: ["never", "occasionaly", "often", "very often"],
    },
    //etto obdi add korte hobe
    {
      question: "Fidgets with hands or feet or squirms in seat ",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Leaves seat when remaining seated is expected",
      options: ["never", "occasionaly", "often", "very often"],
    },

    {
      question:
        "Runs about or climbs excessively when remaining seated is expected",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question:
        "Has difficulty playing or engaging in leisure activities quietly ",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Is “on the go” or often acts as if “driven by a motor” ",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Talks too much",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Blurts out answers before questions have been completed",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question: "Has difficulty waiting his or her turn",
      options: ["never", "occasionaly", "often", "very often"],
    },
    {
      question:
        "Interrupts or intrudes in on others (butts into conversations or games)",
      options: ["never", "occasionaly", "often", "very often"],
    },
    //hyperactive
    // {
    //   question: "Argues with adults",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Loses temper ",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question:
    //     "Actively defies or refuses to comply with adults’ requests or rules",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Deliberately annoys people",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Blames others for his or her mistakes or misbehaviors",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is touchy or easily annoyed by others",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is angry or resentful ",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is spiteful and vindictive",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // //oppositional defiant disorder
    // {
    //   question: "Bullies, threatens, or intimidates others",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Initiates physical fights",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question:
    //     "Lies to obtain goods for favors or to avoid obligations (“cons” others)",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is truant from school (skips school) without permission",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is physically cruel to people ",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Has stolen things of nontrivial value",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Deliberately destroys others’ property",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },

    // {
    //   question: "Is physically cruel to animals",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },

    // {
    //   question: "Has broken into someone else’s home, business, or car",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // //comduct disorder
    // {
    //   question: "Is fearful, anxious, or worried",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is afraid to try new things for fear of making mistakes",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Feels worthless or inferior",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Blames self from problems, feels guilty",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question:
    //     "Feels lonely, unwanted, or unloved; complains that “no one loves him/her”",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is sad, unhappy, or depressed",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    // {
    //   question: "Is self-conscious or easily embarrassed",
    //   options: ["never", "occasionaly", "often", "very often"],
    // },
    //anxiety r depression
  ],

  //  'ready', 'active', 'finished'
  status: "ready",
  index: 0,
  answer: null,
  answerarray: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      //const question = state.questions.at(state.index);
      //answerarray.push(action.payload);

      return {
        ...state,
        answer: action.payload,
        answerarray: [...state.answerarray, action.payload],
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    default:
      throw new Error("Action unkonwn");
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer, answerarray }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        answerarray,

        numQuestions,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };

import questionJson from './questions.json?raw';
export type Topic = "Math" | "Science" | "Reading" | "Writing" | "General" | "History";

export type Question = {
  topic: Topic,
  question: string,
  options: string[],
  gradeLevel: number,
  adult: boolean
};

export type QuestionFilter = {
  topic?: Topic,
  gradeLevel?: number,
  adult: boolean
};

export class QuestionGroup {
  constructor(public questions: Question[]) {}

  filter(questionFilter: QuestionFilter): Question[] {
    const newQuestionList: Question[] = [];

    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].adult == questionFilter.adult) {
        newQuestionList.push(this.questions[i]);
      }
    }
    
    return newQuestionList;
  }
}

type myJsonObject = {
  questions: Question[];
}

const allQuestions: myJsonObject = JSON.parse(questionJson);
const questionGroup = new QuestionGroup(allQuestions.questions);
export default questionGroup;
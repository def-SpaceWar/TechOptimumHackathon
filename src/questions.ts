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
  adult?: boolean
};

export class QuestionGroup {
  constructor(public questions: Question[]) {}

  filterQuestions(questionFilter: QuestionFilter): Question[] {
    const newQuestionList: Question[] = [];

    for (let i = 0; i < this.questions.length; i++) newQuestionList.push(this.questions[i]);

    if (questionFilter.topic) {
      for (let i = 0; i < newQuestionList.length; i++) {
        if (newQuestionList[i].topic != questionFilter.topic) {
          newQuestionList.splice(i, 1);
        }
      }
    }

    if (questionFilter.gradeLevel) {
      for (let i = 0; i < newQuestionList.length; i++) {
        if (newQuestionList[i].gradeLevel != questionFilter.gradeLevel) {
          newQuestionList.splice(i, 1);
        }
      }
    }

    if (questionFilter.adult != undefined) {
      for (let i = 0; i < newQuestionList.length; i++) {
        if (newQuestionList[i].adult != questionFilter.adult) {
          newQuestionList.splice(i, 1);
        }
      }
    }
    
    return newQuestionList;
  }
}
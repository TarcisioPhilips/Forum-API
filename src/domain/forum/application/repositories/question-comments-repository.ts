import { QuestionComment } from "../../enterprise/entities/question-comments";

export interface QuestionCommentsRepository {
  create(question: QuestionComment): Promise<void>;
}

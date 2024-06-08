import { AnswerComment } from "../../enterprise/entities/answer-comments";

export interface AnswerCommentsRepository {
  findById(ind: string): Promise<AnswerComment | null>;
  delete(answerComment: AnswerComment): Promise<void>;
  create(answerComment: AnswerComment): Promise<void>;
}

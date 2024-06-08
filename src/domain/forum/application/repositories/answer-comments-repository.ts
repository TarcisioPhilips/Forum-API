import { AnswerComment } from "../../enterprise/entities/answer-comments";

export interface AnswerCommentsRepository {
  create(answer: AnswerComment): Promise<void>;
}

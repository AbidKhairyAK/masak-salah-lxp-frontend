import { TopicUserHistory } from './topic-user-history.d';
import type { Lesson } from "./lesson";
import type { Practice } from "./practice";

export interface Topic {
  id: number;
  title: string;
  sortOrder: number;
  type: string;
  lesson?: Lesson;
  practice?: Practice;
  topicUserHistories?: TopicUserHistory[];
}
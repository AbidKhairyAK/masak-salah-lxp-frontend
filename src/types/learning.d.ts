import type { Course } from "./course";
import type { Lesson } from "./lesson";

export interface Learning {
	course: Course;
	lesson: Lesson;
	topic: Object;
	prevTopic: Object;
	nextTopic: Object;
}
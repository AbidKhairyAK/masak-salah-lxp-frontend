import type { Lesson } from "./lesson";
import type { Meta } from "./meta";
import type { Practice } from "./practice";

interface Instructor {
  id: number;
  name: string;
  email: string;
}

export interface Chapter {
  id: number;
  title?: string;
  topics?: Topic[];
}

export interface Topic {
  id: number;
  title?: string;
  sortOrder?: number;
  type?: string;
  lesson?: Lesson;
  practice?: Practice;
}

export interface Course {
  id: number;
  instructorId: number;
  instructor?: Instructor;
  title: string;
  caption: string;
  description: string;
  image: string;
  topic_count?: number; 
  lesson_count?: number; 
  practice_count?: number; 
  chapters?: Chapter[]; 
}

export interface CourseCard {
	image: string;
	title: string;
	lessons: number;
	practice: number;
	instructor: string;
  }

export interface CoursePayload {
  instructor_id : string | number,
  title         : string,
  caption       : string,
  description   : string
}

export interface CoursePublicList {
  data: Course[];
  meta: Meta;
}
import type { Lesson } from "./lesson";

interface Instructor {
  id: number;
  name: string;
}

export interface Chapter {
  id: number;
  title?: string;
  topics?: Topic[];
}

export interface Topic {
  id: number;
  title?: string;
  sort_order?: number;
  type?: string;
  lesson?: Lesson;
}

export interface Course {
  id: number;
  instructor_id: number;
  instructor?: Instructor;
  title: string;
  caption: string;
  description: string;
  image: string;
  topic_count?: number; 
  lesson_count?: number; 
  practice_count?: number; 
  chapters?: Chapter[]; 
  created_at: string; 
  updated_at: string;
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
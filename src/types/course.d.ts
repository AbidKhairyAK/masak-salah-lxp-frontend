import type { Chapter } from "./chapter";
import type { CourseEnrollment } from "./course-enrollments";
import type { Lesson } from "./lesson";
import type { Meta } from "./meta";
import type { Practice } from "./practice";
import type { Topic } from "./topic";

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
  enrollments?: CourseEnrollment[];
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
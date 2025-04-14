interface Instructor {
  id: number;
  name: string;
}

interface Chapter {
  id: number;
  title?: string;
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
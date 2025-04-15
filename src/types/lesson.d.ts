export interface Lesson {
	id: number;
	topic_id: number;
	type: string;
	article: LessonArticle;
	video: LessonVideo;
	pdf: LessonPdf;
	created_at: string;
	updated_at: string;
}

export interface LessonVideo {
	id: number;
	lesson_id: number;
	video_url: string;
	created_at: string;
	updated_at: string;
}

export interface LessonPdf {
	id: number;
	lesson_id: number;
	pdf_url: string;
	created_at: string;
	updated_at: string;
}

export interface LessonArticle {
	id: number;
	lesson_id: number;
	content: string;
	created_at: string;
	updated_at: string;
}
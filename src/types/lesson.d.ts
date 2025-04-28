export interface Lesson {
	id: number;
	topicId: number;
	type: string;
	article: LessonArticle;
	video: LessonVideo;
	pdf: LessonPdf;
}

export interface LessonVideo {
	id: number;
	lessonId: number;
	videoUrl: string;
}

export interface LessonPdf {
	id: number;
	lessonId: number;
	pdfUrl: string;
}

export interface LessonArticle {
	id: number;
	lessonId: number;
	content: string;
}
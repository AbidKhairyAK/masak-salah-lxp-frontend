export interface CourseEnrollment {
	userId: number;
	courseId: number;
	isCompleted: boolean;
	completionPercentage: number;
}
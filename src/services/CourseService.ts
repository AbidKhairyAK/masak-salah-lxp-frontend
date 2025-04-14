import useSWRV from "swrv";
import type { Course, CoursePayload } from "@/types/course";

import fetcher from "./_fetcher";
import api from "./_api";

export function getCourseList () 
{
  const url = "/courses";
  return useSWRV <Course[]> (url, fetcher);
}

export function getCourseDetail ( id:number )
{
  const url = `/courses/${id}`;
  return useSWRV <Course> (url, fetcher)
}

interface ValidationError {
	message: string
	errors: Record<string, string[]>
}

export function createCourse ( payload:CoursePayload )
{
  const url = "/courses";
  return api.post <Course> (url, payload);
}

export default { getCourseList, getCourseDetail, createCourse };

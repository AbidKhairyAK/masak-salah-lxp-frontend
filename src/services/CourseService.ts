import useSWRV from "swrv";
import type { Chapter, Course, CoursePayload, CoursePublicList, Topic } from "@/types/course";

import fetcher from "./_fetcher";
import api from "./_api";
import { computed, isRef, type ComputedRef, type Ref } from "vue";

export function getCourseList () 
{
  const url = "/courses";
  return useSWRV <CoursePublicList> (url, fetcher);
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

export function getCourseStructure ( id:number )
{
  const url = `/courses/${id}/structure`;
  return useSWRV <Chapter[]> (url, fetcher)
}

export function getTopicContent(id: ComputedRef<number>) { 
  const url = () => `/topics/${id.value}/content`;
  
  return useSWRV<Topic>(url, fetcher);
}

export function getTopicNav(id: ComputedRef<number>) { 
  const url = () => `/topics/${id.value}/navigation`;
  
  return useSWRV<Topic>(url, fetcher);
}

export default { getCourseList, getCourseDetail, createCourse, getCourseStructure };

import useSWRV from "swrv";
import type { Course } from "@/types/course";
import fetcher from "./_fetcher";

export function getCourseList() {
  const url = "api/courses";
  return useSWRV<Course[]>(url, fetcher);
}

export function getCourseDetail(id: number) {
  const url = `api/courses/${id}`;
  return useSWRV<Course>(url, fetcher)
}

export default { getCourseList, getCourseDetail };

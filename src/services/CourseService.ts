import useSWRV from 'swrv';
import type { Course } from '@/types/course';
import api from './_api';
import fetcher from './_fetcher';

export function getCourseList() {
  const url = 'api/courses';
  return useSWRV<Course[]>(url,  fetcher);
}

export default { getCourseList };
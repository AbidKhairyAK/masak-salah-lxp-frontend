import type { Topic } from "./topic";

export interface Chapter {
	id: number;
	title?: string;
	topics?: Topic[];
  }
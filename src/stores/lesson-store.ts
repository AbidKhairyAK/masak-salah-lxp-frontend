import { defineStore } from "pinia";

export const useLessonStore = defineStore("course", {
  state: () => ({
    lesson_id: 0,
    video_url: "",
    type: "",
    topic_id: 0,
  }),
  actions: {
    setLessonData({
      video_url,
      type,
      lesson_id,
      topic_id
    }: {
      video_url: string;
      type: string;
      lesson_id: number;
      topic_id: number;
    }) {
      this.video_url = video_url;
      this.type = type;
      this.lesson_id = lesson_id;
      this.topic_id = topic_id;
    },

    setUrl(video_url: string) {
      this.video_url = video_url;
    },
    setType(type: string) {
      this.type = type;
    },
    setLessonId(lesson_id: number) {
      this.lesson_id = lesson_id;
    },
  },
});

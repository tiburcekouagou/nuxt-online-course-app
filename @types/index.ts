export interface Course {
    title:    string;
    chapters: Chapter[];
}

export interface Chapter {
    title:   string;
    slug:    string;
    number:  number;
    lessons: Lesson[];
}

export interface Lesson {
    title:       string;
    slug:        string;
    number:      number;
    downloadUrl: string;
    videoId:     string;
    text:        string;
    sourceUrl?:  string;
    path?: string;
}

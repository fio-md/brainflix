export interface Video {
  id: "string";
  image: "string";
  title: "string";
  channel: "string";
}

export interface CommentInput {
  name: string;
  comment: string;
}

export interface Comment {
  id: string;
  name: string;
  comment: string;
  timestamp: number;
}

export interface VideoDetail {
  id: string;
  title: string;
  channel: string;
  image: string;
  views: String;
  likes: String;
  timestamp: number;
  description: String;
  comments: Comment[];
}

export interface PostComment {
  id: string;
  comment: CommentInput;
}

export interface DeleteComment {
  videoId: string;
  commentId: string;
}

export interface PostVideo {
  title: string;
  description: string;
  image: string;
}

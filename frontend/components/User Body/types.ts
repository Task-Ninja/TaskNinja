export interface Tag {
  label: string;
  value?: any;
}

export interface NestedTask {
  title: string;
  status: string;
  details: string;
}

export interface Attachment {
  type: "audio" | "image" | "file";
  link: string;
}

export interface TaskData {
  title: string;
  status: string;
  description: string;
  tags: Tag[];
  tasks: NestedTask[];
  attachments: Attachment[];
}

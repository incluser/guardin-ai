export type Task = {
  id: number;
  goal: string;
  goal_description: string;
  label_description: string;
  tags: Tags;
  policies: string;
};

export type Tags = Array<{
  id: number;
  label: string;
  description: string;
}>;

export type UpdateFieldPayload = {
  id: number;
  field: string;
  value: string | Tags;
};

export enum StatusEnum
{
  ToDo = "TODO",
  InProgress = "IN-PROGRESS",
  Done = "DONE",
  Archive  = "ARCHIVE"
};

export const StatusTypeLabelMapping : Record<StatusEnum,string> = {
  [StatusEnum.ToDo]: "To do",
  [StatusEnum.InProgress]: "In progress",
  [StatusEnum.Done]: "Done",
  [StatusEnum.Archive]: "Archive"
}

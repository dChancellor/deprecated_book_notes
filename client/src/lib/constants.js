export const noteTypes = [
  'quote',
  'thought',
  'connection',
  'definition',
  'concept',
];

export function ChapterObject(chapterNumber) {
  this.summary = '';
  this.notes = [];
  this.chapterNumber = chapterNumber;
  this.id = Math.floor(Math.random() * 100000);
}

export function NoteObject(noteType) {
  this.type = noteType;
  this.id = Math.floor(Math.random() * 100000);
  this.content = '';
  this.pageNumber = 0;
  this.new = true;
}

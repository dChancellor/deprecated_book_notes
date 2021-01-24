export const noteTypes = [
  'quote',
  'thought',
  'connection',
  'definition',
  'concept',
];

export function ChapterObject() {
  this.summary = '';
  this.notes = [];
  this.chapterNumber = 0;
  this.id = Math.floor(Math.random() * 100000);
}

export function NoteObject() {
  this.type = '';
  this.id = Math.floor(Math.random() * 100000);
  this.content = '';
  this.pageNumber = 0;
  this.new = true;
}

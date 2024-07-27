export interface SentenceProps {
  sentence: string;
  index: number;
  onSelect: (idx) => void;
  onSubmit: (data, fnReset) => void;
}

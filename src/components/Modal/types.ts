// Component

export interface Props {
  title: string;
  content: JSX.Element;
  id: string;
  afterClose: () => void;
}

interface IQuote {
  text: string;
  author: string;
  year: number;
}

interface IBorder {
  color: string;
  thick: number;
  radius: number;
}

export {
  IQuote,
  IBorder
}
interface Props {
  word: string;
  phonetic?: string;
}
export const ResultTitle = ({ word, phonetic }: Props) => {
  return (
    <div>
      <h1 id="result-title" className="text-5xl font-bold text-slate-900 dark:text-slate-200 mb-2">{word}</h1>
      <p className="text-purple-500 font-medium text-xl font-sans">{phonetic}</p>
    </div>
  )
}

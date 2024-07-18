import { PartOfSpeech } from "@/components/Result/PartOfSpeech"
import { Player } from "@/components/Result/Player"
import { HorizontalSeparator } from "@/components/Shared/HorizontalSeparator"
import { SourceUrls } from "@/components/Result/SourceUrls"
import { ResultTitle } from "@/components/Result/ResultTitle"
import { WordServices } from "@/services/words"
import ErrorMessage from "@/components/Result/Error"
import { historial } from "@/services/historial"

interface Props {
  params: { query: string },
  searchParams: Record<string, string>
}

async function Result({ searchParams }: Props) {
  const { query } = searchParams

  const [error, words] = await WordServices.getByQuery(query)

  if (words === null || error) {
    const message = `No results found for: "${query}"`
    return <ErrorMessage message={message ?? "Error"} />
  };

  const [word] = words

  const audio = word.phonetics.find(p => p.audio)?.audio
  return (
    <section className="mt-10">
      <section className="flex items-center justify-between">
        <ResultTitle word={word.word} phonetic={word.phonetic} />
        {audio && <Player audio={audio} />}
      </section>
      {word.meanings.map((meaning, index) => (
        <PartOfSpeech key={`${meaning.partOfSpeech}_${index}`} meaning={meaning} />
      ))}
      <HorizontalSeparator />
      <SourceUrls sourceUrls={word.sourceUrls} />
    </section>
  )
}

export default Result
"use client"
import { HistoryIcon } from '@/components/Shared/Icons'
import { toggleModal } from '@/redux/features/modal/modalSlice'
import { useAppDispatch } from '@/redux/hooks'
import { HistorialItem } from '@/types'
import { date } from '@/utils/date'
import { useRouter } from 'next/navigation'

interface Props {
  items: HistorialItem[]
}
export const HistorialList = ({ items }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useRouter()

  const handleClick = (word: string) => async () => {
    navigate.push(`/search?query=${word}`)
    dispatch(toggleModal())
  }

  items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <ul id='historial-list' className="max-h-[85%] overflow-y-auto">
      {items.map((item) => (
        <li
          key={item.word}
          role='button'
          onClick={handleClick(item.word)}
          className="px-5 py-4 border-b border-zinc-200 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700"
        >
          <article title='historial-item' className="flex items-center justify-between dark:text-zinc-300 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <HistoryIcon width={20} height={20} />
              {item.word}
            </div>
            <div>
              <span className="text-sm italic font-normal">
                {date.day(item.date)} {' - '} {date.hour(item.date)}
              </span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}

"use client"
import { SearchIcon } from "@/components/Shared/Icons"
import { historial } from "@/services/historial"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const SearchForm = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.trim() === '') return;
    const word = value.trim();

    historial.save({
      id: window.crypto.randomUUID(),
      word,
      date: new Date()
    })
    router.push(`/search?query=${word}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      // onBlur={() => { console.log('blur') }}
      className={`
        bg-gray-100 dark:bg-zinc-800 rounded-xl px-4 py-3 flex w-full
      `}
    >
      <input
        onChange={handleChange}
        name="search"
        id="searchInput"
        type="text"
        value={value}
        placeholder={"Search..."}
        className={`
          bg-transparent
          dark:text-gray-200
          outline-none
          w-full text-xl
        `}
      />
      <button title="Bubmit Button" id="search-button" type="submit" className="text-purple-500 p-1">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  )
}
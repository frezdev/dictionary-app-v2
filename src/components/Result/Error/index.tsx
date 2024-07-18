export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div id="error-message" className="text-zinc-700 p-3 pt-10 dark:text-zinc-500 grid text-center font-extrabold">
      <span className='text-5xl'>{message}</span>
    </div>
  )
}

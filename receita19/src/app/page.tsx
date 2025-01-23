import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <h1>
          Viva Santana!
        </h1>
        <Link href="/rota1"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          Rota1
        </Link> <br /><br />
        <a href="/rota1"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          Rota 1, jeito antigo
        </a>
      </div>
    </div>
  )
}
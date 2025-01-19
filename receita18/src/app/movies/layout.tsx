import Form from "next/form";
import Link from "next/link";
import MovieForm from "../movieSearch/page";

export default function LayoutMovie({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MovieForm />
      <main>{children}</main>
    </>
  );
}

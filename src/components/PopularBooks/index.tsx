import { useQuery } from "@tanstack/react-query"
import { BookCard, BookWithAvgRating } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../ui/Link"
import { Container } from "./styles"
import { api } from "@/lib/axios"

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<Array<BookWithAvgRating>>({
    queryKey: ["popular-books"],
    queryFn: async () => {
      const { data } = await api.get("/books/popular")
      return data?.books ?? []
    }
  })

  return (
    <Container>
      <header>
        <Text size="sm">Livros Populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {popularBooks?.map(book => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </Container>
  )
}
import { Header } from "./Header"
import { Footer } from "./Footer"

type PageProps = {
  content: React.ReactNode;
}

const Page = ({ content }: PageProps) => {
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  )
}

export { Page }
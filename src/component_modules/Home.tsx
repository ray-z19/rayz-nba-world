import { Header } from "./Header"

import pageStyles from "../css_modules/Page.module.css"

const Home = () => {
  return (
    <>
      <Header />
      <div className={pageStyles["page"]}></div>
      <div className={pageStyles["footer"]}></div>
    </>
  )
}

export { Home }
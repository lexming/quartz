import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { version } from "../../package.json"

export default (() => {
  const ArticleFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <p class="article-license">
        Article written by Alex Domingo.
        Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;" />
        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;" />
      </p>
    )
  }

  return ArticleFooter
}) satisfies QuartzComponentConstructor

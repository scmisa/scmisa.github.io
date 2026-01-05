import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/sidebarLinks.scss"

interface Options {
  title?: string
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const SidebarLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    const title = opts?.title ?? "Links"

    return (
      <div class={`sidebar-links ${displayClass ?? ""}`}>
        <h3>{title}</h3>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  SidebarLinks.css = style
  return SidebarLinks
}) satisfies QuartzComponentConstructor

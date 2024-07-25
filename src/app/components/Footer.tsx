import { GITHUB_PAGE, LINKEDIN_PAGE, SOURCECODE_PAGE } from "@/config"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6"

const links = [
  {
    name: "GitHub",
    icon: <FaGithub/>,
    href: GITHUB_PAGE
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin/>,
    href: LINKEDIN_PAGE
  },
  {
    name: "source code",
    icon: <FaCode/>,
    href: SOURCECODE_PAGE
  }
]

export default function Footer() {
  return (
    <footer className="mb-16 sticky">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {links.map(({name, icon, href}) => (
          <li key={name}>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              {icon}
              <p className="ml-2 h-7">{name}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}

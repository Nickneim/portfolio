import { GITHUB_PAGE, LINKEDIN_PAGE, SOURCECODE_PAGE } from "@/config"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="mb-16 sticky">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={GITHUB_PAGE}
          >
            <FaGithub />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={LINKEDIN_PAGE}
          >
            <FaLinkedin />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={SOURCECODE_PAGE}
          >
            <FaCode />
            <p className="ml-2 h-7">source code</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}

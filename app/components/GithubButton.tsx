import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function GithubButton() {
    return (
        <Link
            href="https://github.com/msyavuz/resumeio2pdf"
            className="absolute bottom-4 right-12"
        >
            <AiFillGithub />
        </Link>
    );
}

import DarkModeButton from "./components/DarkModeButton";
import GithubButton from "./components/GithubButton";
import UrlForm from "./components/UrlForm";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UrlForm />
            <GithubButton />
            <DarkModeButton />
        </main>
    );
}

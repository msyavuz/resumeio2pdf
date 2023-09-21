"use client";

import { useState } from "react";

export default function UrlForm() {
    const [requestStatus, setRequestStatus] = useState<
        0 | 1 | 2
    >(2);
    return (
        <form
            className="flex flex-col items-center gap-8"
            action=""
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label htmlFor="url" className="text-2xl">
                Enter the link of your resume
            </label>
            <input
                type="url"
                name="url"
                id="url"
                className="px-4 py-2 rounded-lg"
            />
            <button
                type="submit"
                className="px-4 py-2 rounded-lg dark:bg-primaryDark dark:text-text"
            >
                Get Pdf
            </button>
        </form>
    );
}

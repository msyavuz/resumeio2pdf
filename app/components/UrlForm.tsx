"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RequestStatus from "./RequestStatus";

export default function UrlForm() {
    const [requestStatus, setRequestStatus] = useState<
        0 | 1 | 2
    >(0);

    const [resumeUrl, setResumeUrl] = useState("");

    const fetchPdf = async (resumeId: string) => {
        const resp = await axios.get(
            "https://resumeio2pdf-backend.onrender.com/" + resumeId,
            {
                responseType: "blob",
            },
        );
        const data = await resp.data;
        const url = window.URL.createObjectURL(data);
        const a = document.createElement("a");
        a.href = url;
        a.download = resumeId;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const validateAndParseUrl = (url: string) => {
        if (url.includes("https://resume.io/r/")) {
            return url.replace("https://resume.io/r/", "");
        } else {
            return false;
        }
    };

    return (
        <form
            className="flex flex-col items-center gap-8"
            action=""
            onSubmit={async (e) => {
                e.preventDefault();
                const res = validateAndParseUrl(resumeUrl);
                if (res) {
                    setRequestStatus(2);
                    fetchPdf(res).then(() => {
                        setRequestStatus(1);
                    });
                } else {
                }
            }}
        >
            <label
                htmlFor="url"
                className="text-2xl flex flex-col text-center gap-4"
            >
                <p>
                    Enter the link of your resume from resume.io
                </p>
            </label>
            <input
                type="url"
                name="url"
                id="url"
                className="px-4 py-2 rounded-lg peer w-full shadow-full shadow-accent outline-secondary  activ:outline-secondary focus:outline-none"
                value={resumeUrl}
                onChange={(e) => {
                    setResumeUrl(e.target.value);
                }}
            />
            <p className="text-accent">
                Format: https://resume.io/r/cHrkR167s
            </p>
            <button
                type="submit"
                className="flex justify-center items-center gap-4 px-4 py-2 rounded-lg bg-primary text-textDark dark:text-text transition ease-in-out duration-300  hover:scale-110"
            >
                Get Pdf
            </button>
            <RequestStatus status={requestStatus} />
        </form>
    );
}

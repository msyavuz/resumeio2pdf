import { MdDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function RequestStatus({ status }: { status: 0 | 1 | 2 }) {
    if (status === 0) {
        return <></>;
    } else if (status === 1) {
        return (
            <div className="dark:text-textDark text-text flex justify-center items-center">
                <MdDone />
            </div>
        );
    } else if (status === 2) {
        return (
            <div className="text-text animate-spin dark:text-textDark">
                <AiOutlineLoading3Quarters />
            </div>
        );
    }
}

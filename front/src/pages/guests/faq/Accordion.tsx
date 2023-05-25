import { useState } from "react";
import arrow from "@icons/arrows/navigate_next_blue.svg"
import Image from "next/image";

interface AnswerProps {
    a: string;
}

const Answer: React.FC<AnswerProps> = ({ a }) => {
    return <div className="mt-6 font-semibold">{a}</div>;
};

interface AccordionProps {
    q: string;
    a: string;
}

export const Accordion: React.FC<AccordionProps> = ({ q, a }) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="bg-white rounded-xl p-6 py-4 lg:p-8 text-main-blue mb-6 mx-6 lg:mx-0 w-full lg:w-3/5 shadow-md">
            <div
                onClick={() => setShow(() => !show)}
                className="flex justify-between items-center cursor-pointer"
            >
                <h3 className="text-xl lg:text-2xl font-bold ">{q}</h3>
                <Image
                    src={arrow}
                    alt="стрелка"
                    className={show ? "rotate-90" : "rotat"}
                />
            </div>
            {show ? <Answer a={a} /> : null}
        </div>
    );
};

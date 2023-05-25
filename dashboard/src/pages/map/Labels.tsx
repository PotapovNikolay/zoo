import { BubbleChat } from "components/bubble";
import { coordsType, useCoords, useReady } from "hooks";
import { MutableRefObject, useEffect, useRef, useState } from "react";

type direction = "tl" | "tr" | "bl" | "br";

interface pointProps {
    index: number;
    windowWidth: number;
    labels: MutableRefObject<SVGSVGElement | null>;
    title: string;
}

function defineDirection(parent: DOMRect, child: Element, coords: coordsType) {
    const childPos = child.getBoundingClientRect();

    if (child.id === "lake") {
        return "tl";
    }

    if (
        child.id === "contactZone" ||
        child.id === "australia" ||
        child.id === "exotarium"
    ) {
        return "tl";
    }
    if ((parent.width * 3) / 5 > childPos.left) {
        if ((parent.width * 3) / 5 > childPos.top) {
            return "tl";
        } else {
            return "bl";
        }
    } else {
        if ((parent.width * 2) / 5 > childPos.top) {
            return "tr";
        } else {
            return "br";
        }
    }
}

const Point: React.FC<pointProps> = ({ labels, index, windowWidth, title }) => {
    const [coords, setCoords] = useState<coordsType>({ top: 0, left: 0 });
    const [child, setChild] = useState<DOMRect>();
    const [parent, setParent] = useState<DOMRect>();
    const [direction, setDirection] = useState<direction>("tl");

    useEffect(() => {
        const { child, parent, left, top } = useCoords(labels, index);
        setCoords({ left, top });
        setDirection(
            defineDirection(parent!, child!, { left: left, top: top })
        );
    }, [labels, windowWidth]);

    return <BubbleChat direction={direction} title={title} coords={coords} />;
};

const labelsText = [
    { text: "Контактная зона", id: "contactZone" },
    { text: "Русский север", id: "russianNorth" },
    { text: "Животные белогорья", id: "belAnimlas" },
    { text: "Австралия", id: "australia" },
    { text: "Закрыто", id: "close" },
    { text: "Европа", id: "europe" },
    { text: "Дальний восток", id: "farEast" },
    { text: "Экзотариум", id: "exotarium" },
    // { text: "Азия", id: "asia" },
    { text: "Озеро", id: "lake" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
    { text: "приходите", id: "10" },
];

interface labelsProps {}

export const Labels: React.FC<labelsProps> = ({}) => {
    const labelsRef = useRef<SVGSVGElement>(null);

    const { ready, width } = useReady(labelsRef);

    return (
        <div className="relative ">
            {ready
                ? labelsText.map(({ text, id }, key: number) => {
                      let ref = labelsRef.current!;

                      const child = ref.childNodes[key] as Element;

                      const current = labelsText.find(
                          ({ id }) => id === child?.id
                      );

                      if (current) {
                          return (
                              <Point
                                  title={current.text}
                                  windowWidth={width}
                                  key={key}
                                  index={key}
                                  labels={labelsRef}
                              />
                          );
                      } else {
                          return null;
                      }
                  })
                : null}
            <svg
                ref={labelsRef}
                data-name="Группа 7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={"0 0 2144 2177"}
                className={"z-30 absolute inset-0 "}
            >
                <circle
                    id="ы"
                    data-name="Эллипс 2"
                    className="cls-1"
                    cx="663.5"
                    cy="457.5"
                    r="2.5"
                />
                <circle
                    id="exotarium"
                    data-name="Эллипс 2"
                    className="cls-1"
                    cx="1091.5"
                    cy="371.5"
                    r="2.5"
                />
                <circle
                    id="russianNorth"
                    data-name="Эллипс 2 копия"
                    className="cls-1"
                    cx="1472.5"
                    cy="227.5"
                    r="2.5"
                />
                <circle
                    id="asia"
                    data-name="Эллипс 2 копия 5"
                    className="cls-1"
                    cx="970.5"
                    cy="791.5"
                    r="2.5"
                />
                <circle
                    id="australia"
                    data-name="Эллипс 2 копия 4"
                    className="cls-1"
                    cx="500.5"
                    cy="670.5"
                    r="2.5"
                />
                <circle
                    id="contactZone"
                    data-name="Эллипс 2 копия 6"
                    className="cls-1"
                    cx="595.5"
                    cy="1019.5"
                    r="2.5"
                />
                <circle
                    id="belAnimlas"
                    data-name="Эллипс 2 копия 7"
                    className="cls-1"
                    cx="909.5"
                    cy="1804.5"
                    r="2.5"
                />
                <circle
                    id="farEast"
                    data-name="Эллипс 2 копия 8"
                    className="cls-1"
                    cx="1621.5"
                    cy="1145.5"
                    r="2.5"
                />
                <circle
                    id="europe"
                    data-name="Эллипс 2 копия 3"
                    className="cls-1"
                    cx="1789.5"
                    cy="526.5"
                    r="2.5"
                />
                <circle
                    id="lake"
                    data-name="Эллипс 2 копия 2"
                    className="cls-1"
                    cx="1024.5"
                    cy="1205.5"
                    r="2.5"
                />
            </svg>
        </div>
    );
};

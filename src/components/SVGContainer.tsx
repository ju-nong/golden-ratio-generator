import { Fragment } from "react";
import { Fibonacci } from "../types";

interface SVGContainerProps {
    canvasSize: number;
    entitySize: number;
    fibonaccis: Fibonacci[];
}

function SVGContainer({
    canvasSize,
    entitySize,
    fibonaccis,
}: SVGContainerProps) {
    return (
        <svg
            width={canvasSize}
            height={canvasSize}
            xmlns="http://www.w3.org/2000/svg"
        >
            {fibonaccis.map(
                ({ value, x, y, startX, startY, endX, endY }, index) => {
                    const size = entitySize * value;

                    const path = `M ${startX} ${startY} A ${size} ${size} 0 0 0 ${endX} ${endY}`;

                    return (
                        <Fragment key={index}>
                            <rect
                                fill="none"
                                stroke="black"
                                x={x}
                                y={y}
                                width={size}
                                height={size}
                            />
                            <path
                                d={path}
                                fill="none"
                                stroke="black"
                                stroke-width="3"
                            />
                        </Fragment>
                    );
                },
            )}
        </svg>
    );
}

export { SVGContainer };

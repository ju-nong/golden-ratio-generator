import { Fragment } from "react";
import { Fibonacci } from "../types";
import styled from "@emotion/styled";

const SVGStyled = styled.svg`
    transform: scaleX(-1) rotate(-90deg);
    position: absolute;
    z-index: 10;
    top: -73.5%;
    left: -87%;
`;

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
        <SVGStyled
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
                                stroke="white"
                                x={x}
                                y={y}
                                width={size}
                                height={size}
                            />
                            <path
                                d={path}
                                fill="none"
                                stroke="white"
                                stroke-width="3"
                            />
                        </Fragment>
                    );
                },
            )}
        </SVGStyled>
    );
}

export { SVGContainer };

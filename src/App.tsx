import { useState } from "react";
import styled from "@emotion/styled";
import { Fibonacci } from "./types";
import { SVGContainer } from "./components";
import { newEntity } from "./utils";

const NavigationStyled = styled.ul`
    position: fixed;
    left: 50%;
    bottom: 10px;
    display: flex;
    column-gap: 10px;
    list-style: none;
    transform: translateX(-50%);

    > li {
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        width: 30px;
        line-height: 30px;
        text-align: center;
    }
`;

function App() {
    const config = {
        canvasSize: 1920,
        entitySize: 16.18,
    };
    const halfCanvasSize = config.canvasSize / 2;

    const [fibonaccis, setFibonaccis] = useState<Fibonacci[]>([]);

    function handlePush() {
        const { length } = fibonaccis;

        if (length) {
            const prevEntity = fibonaccis[length - 1];

            let [value, x, y, startX, startY, endX, endY] = [
                0, 0, 0, 0, 0, 0, 0,
            ];

            if (length === 1) {
                value = 1;
                x = prevEntity.x + 1 * config.entitySize;
                y = prevEntity.y;
                startX = x;
                startY = y + 1 * config.entitySize;
                endX = x + 1 * config.entitySize;
                endY = y;
            } else {
                const prevPrevEntity = fibonaccis[length - 2];
                value = prevEntity.value + prevPrevEntity.value;

                const size = value * config.entitySize;

                const type = length % 4; // 1 동쪽, 2 북쪽, 3 서쪽, 0 남쪽

                if (type === 1) {
                    x = prevEntity.x + prevEntity.value * config.entitySize;
                    y = fibonaccis[length - 3].y;

                    startX = x;
                    startY = y + size;
                    endX = x + size;
                    endY = y;
                } else if (type === 2) {
                    x = prevPrevEntity.x;
                    y = prevEntity.y - size;

                    startX = x + size;
                    startY = y + size;
                    endX = x;
                    endY = y;
                } else if (type === 3) {
                    x = prevEntity.x - size;
                    y = prevEntity.y;

                    startX = x + size;
                    startY = y;
                    endX = x;
                    endY = y + size;
                } else {
                    x = prevEntity.x;
                    y = prevEntity.y + prevEntity.value * config.entitySize;

                    startX = x;
                    startY = y;
                    endX = x + size;
                    endY = y + size;
                }
            }

            setFibonaccis([
                ...fibonaccis,
                { value, x, y, startX, startY, endX, endY },
            ]);
        } else {
            const size = 1 * config.entitySize;

            setFibonaccis([
                {
                    value: 1,
                    x: halfCanvasSize - size,
                    y: halfCanvasSize - size,
                    startX: halfCanvasSize - size,
                    startY: halfCanvasSize - size,
                    endX: halfCanvasSize,
                    endY: halfCanvasSize,
                },
            ]);
        }
    }

    function handlePop() {
        if (fibonaccis.length) {
            setFibonaccis(fibonaccis.slice(0, -1));
        }
    }

    return (
        <>
            <SVGContainer
                canvasSize={config.canvasSize}
                entitySize={config.entitySize}
                fibonaccis={fibonaccis}
            />

            <NavigationStyled>
                <li onClick={handlePush}>+</li>
                <li onClick={handlePop}>-</li>
            </NavigationStyled>
        </>
    );
}

export default App;

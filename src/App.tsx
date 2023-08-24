import { useState } from "react";
import styled from "@emotion/styled";

const CanvasStyled = styled.canvas`
    width: 100%;
    height: 100%;
`;

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
    const [state, setState] = useState<number[]>([1]);

    function handleAdd() {
        const { length } = state;

        setState(
            length === 1
                ? [1, 1]
                : [...state, state[length - 2] + state[length - 1]], // 피보나치
        );
    }

    function handlePop() {
        if (state.length !== 1) {
            setState(state.slice(0, -1));
        }
    }

    return (
        <>
            {/* <CanvasStyled id="myCanvas"></CanvasStyled> */}
            <NavigationStyled>
                <li onClick={handleAdd}>+</li>
                <li onClick={handlePop}>-</li>
            </NavigationStyled>
        </>
    );
}

export default App;

import styled from "@emotion/styled";
import { fibonacci } from "./utils";

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
    return (
        <>
            <CanvasStyled id="myCanvas"></CanvasStyled>
            <NavigationStyled>
                <li>+</li>
                <li>-</li>
            </NavigationStyled>
        </>
    );
}

export default App;

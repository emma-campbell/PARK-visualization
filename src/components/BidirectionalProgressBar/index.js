import styled from "styled-components";


const BidirectionalProgressBar = ({width, completed, direction}) => {
    
    const ProgressBarDiv = styled.div`
        height: 2em;
        width: ${width}%;
        background-color: #c4c4c4;
        border-radius: 16px;
    `;

    var FilledDiv;

    if (direction) {
        FilledDiv = styled.div`
            height: 100%;
            background-color: #003972;
            width: ${completed}%;
            border-radius: inherit;
        `;
    } else {
        FilledDiv = styled.div`
            height: 100%;
            background-color: #003972;
            width: ${completed}%;
            border-radius: inherit;
            float: right;
        `;
    }

    return (
        <ProgressBarDiv>
            <FilledDiv/>
        </ProgressBarDiv>
    )
}

export default BidirectionalProgressBar;
import styled from "styled-components";


export const Table = styled.table`
width: 100%;
background-color: #FFF;
padding: 15px;
box-shadow: 0px 0px 5px #CCC;
border-radius: 10px;
margin-top: 20px;


    @media (max-width: 750px) {
        tr{
                display: flex;
                flex-direction: column;
                margin: auto;
                width: 250px;
        }
    }
`

export const TableHeadColumn = styled.th<{width?: number }>`
width: ${props => props.width ? `${props.width}px` : `auto`};
text-align: left;


button {
    
    text-align: center;
    font-size: 25px;
    cursor: pointer;   
    background:none; 
    border:none;
}


`

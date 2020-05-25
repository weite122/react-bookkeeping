import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#e6f7ff;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position: relative;
      color: #1890ff;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#1890ff;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

export {CategorySection};
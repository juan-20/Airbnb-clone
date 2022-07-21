import styled from 'styled-components'

export const ListImage = styled.li`
      display: grid;
      gap: 5px;
      grid-template-areas:
		"image1 image2 image4"
		"image1 image3 image5"
		;
        justify-content: center;
        align-items: center;

        .image1{
            border-radius: 20px 0 0 20px;
            grid-area: image1;   
            width: 560px;
            height: 500px;
        }
        
        .image2{
            grid-area: image2;
            width: 270px;
            height: 200px;
        }

    .image3{
        grid-area: image3;
        width: 270px;
        height: 200px;
    }

    .image4{
        grid-area: image4;
        width: 270px;
        height: 200px;
        border-radius: 0px 20px 0px 0px;
    }

    .image5{
        grid-area: image5;
        width: 270px;
        height: 200px;
        border-radius: 0px 0 20px 0px;
    }
     
`;
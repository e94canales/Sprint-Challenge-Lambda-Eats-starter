import styled from 'styled-components'

const FormWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   
   
   
   .formWrapper {
       width: 50%;
       display: flex;
       flex-wrap: wrap;
       text-align: center;
       justify-content: center;
       background-color: rgba(71, 71, 71, 0.881);
       /* margin: 5% 0; */
       color: white;
    
       
       h2 {
           width: 100%;
           padding: 3%;
           background-color:rgba(20, 20, 20, 0.850);
           
           
       }
       h3 {
           width: 100%;
           padding: 2%;
           background-color:rgba(20, 20, 20, 0.850);
       }
       form {
           padding: 5%;
           width: 100%;
           
       }
       .select {
             padding: 5%;
           width: 100%;
       }
       button {
           width: 20%;
           padding: 1% 1%;
           border-radius: 20px;
           margin-bottom: 5%;
           
           &:hover:enabled {
                background-color: green;
                
           }
           
       }
       .check{
           padding: 3%;
       }
       label {
           padding: 0 5%;
       }
       .orderUp{
           width: 100%;
           margin-bottom: 5%;
           background-color:rgba(20, 20, 20, 0.950);
           padding: 3%;
       }
       
   }
    
`

export default FormWrapper
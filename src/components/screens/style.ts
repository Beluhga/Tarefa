import styled from 'styled-components/native';

export const InputContainer = styled.View`
    background-color: ${({theme}) => theme.colors.background1};
    border-radius: 5px;
    margin-top: -28px;
    margin: 0px 24px;
    flex-direction: row;
    align-items: center;

`;

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;

`;

export const InfoContainer = styled.View`
    flex: 1;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    padding-right: 24px;

`;

export const IconsDivider = styled.View`
    width: 1px;
    height: 24px;
    background-color: ${({theme}) => theme.colors.iconsdivider};
    margin: 0px 12px;

`;

export const Container2 = styled.View`
    padding: 0px 24px;
    padding-top: 50px;
    padding-bottom: 60px;
    background-color: ${({theme}) => theme.colors.backgroundcolor};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`;

export const Tasks = styled.View`
    align-items: center;
    flex-direction: row;

`;

export const TasksCounterBold = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.background1};
    font-family: 'Inter-Bold';

`;


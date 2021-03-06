import styled from 'styled-components'

import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
`

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`

export const UserData = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 8px;

    > strong {
        display: block;
        font-size: 13px;
        color: var(--white);
    }

    > span {
        font-size: 13px;
        color: var(--gray);
    }
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > svg:not(:first-child) {
        margin-left: 8px;
    }
`

const renderIconStyle = (icon: any) => styled(icon)`
    width: 20px;
    height: 20px;

    color: var(--gray);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`

export const MicIcon = renderIconStyle(Mic)

export const HeadphoneIcon = renderIconStyle(Headset)

export const SettingsIcon = renderIconStyle(Settings)

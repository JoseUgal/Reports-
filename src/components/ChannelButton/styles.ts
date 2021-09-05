import styled from 'styled-components'

import { Hashtag } from 'styled-icons/heroicons-outline'
import {
  PersonAdd,
  Settings
} from 'styled-icons/material'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;

        span {
            margin-left: 5px;
            color: var(--senary);
        }

    }

    &.active,
    &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }
    }

`

export const HastagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`
const renderIconStyle = (icon: any, extraCSS ?: any) => styled(icon)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    ${extraCSS && { ...extraCSS }}

    transition: color .2s;

    &:hover {
        color: var(--white)
    }
`

export const InviteIcon = renderIconStyle(PersonAdd)
export const SettingsIcon = renderIconStyle(Settings, { marginLeft: '5px' })

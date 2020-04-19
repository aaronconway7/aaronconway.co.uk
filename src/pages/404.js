import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import tw from 'twin.macro'

import jack from '../assets/img/lost/jack.gif'
import sawyer from '../assets/img/lost/sawyer.gif'
import kate from '../assets/img/lost/kate.gif'
import hurley from '../assets/img/lost/hurley.gif'
import john from '../assets/img/lost/john.gif'
import desmond from '../assets/img/lost/desmond.gif'
import sayid from '../assets/img/lost/sayid.gif'
import charlie from '../assets/img/lost/charlie.gif'
import ben from '../assets/img/lost/ben.gif'
import claire from '../assets/img/lost/claire.gif'
import jin from '../assets/img/lost/jin.gif'
import sun from '../assets/img/lost/sun.gif'
import michael from '../assets/img/lost/michael.gif'

const lostCharacters = [
    {
        name: `Jack`,
        img: jack,
    },
    {
        name: `Sawyer`,
        img: sawyer,
    },
    {
        name: `Kate`,
        img: kate,
    },
    {
        name: `Hurley`,
        img: hurley,
    },
    {
        name: `John`,
        img: john,
    },
    {
        name: `See you in another life, brother`,
        img: desmond,
    },
    {
        name: `Sayid`,
        img: sayid,
    },
    {
        name: `Charlie`,
        img: charlie,
    },
    {
        name: `Ben`,
        img: ben,
    },
    {
        name: `Claire`,
        img: claire,
    },
    {
        name: `Jin`,
        img: jin,
    },
    {
        name: `Sun`,
        img: sun,
    },
    {
        name: `Michael`,
        img: michael,
    },
]

const NotFoundPage = () => {
    const lostCharacter =
        lostCharacters[Math.floor(Math.random() * lostCharacters.length)]
    return (
        <Page404 char={lostCharacter.img} className={`404-pg`}>
            <div class={`container`}>
                <span>Are you...</span>
                <h1 className={`title`}>LOST</h1>
                <Link className={`go-home`} to={`/`}>
                    {lostCharacter.img !== desmond ? `Go Home` : ``}{' '}
                    {lostCharacter.name}
                </Link>
            </div>
        </Page404>
    )
}

export default NotFoundPage

const Page404 = styled.div`
    ${tw`h-screen bg-cover bg-center text-white grid justify-center items-center text-center`}
    background-image: url(${props => props.char});

    .title {
        ${tw`font-bold mb-4`}
        font-size: 120px;
        font-family: Impact, 'Poppins';
    }

    .go-home {
        ${tw`inline-block border border-white p-4 rounded text-white transition-colors duration-300 ease-in-out`}
    
        &:hover {
            background-color: #fa4b4b;
            border-color: #fa4b4b;
        }
    }
`

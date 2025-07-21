'use client'
import Image from 'next/image'
import React from 'react'
const arr = [
    {
        name: 'Jenny Wilson',
        description: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        img: '/profile1.png',
        id: 0,
        profile: 'Vice President'
    },
    {
        name: 'Andrey Igorov',
        description: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        img: '/profile2.jpg',
        id: 1,
        profile: 'manager'

    },
    {
        name: 'Jeck anderson',
        description: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        img: '/profile3.avif',
        id: 2,
        profile: 'team leader'

    },
    {
        name: 'hidden user',
        description: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        img: '/unkown.jpg',
        id: 3,
        profile: 'director company'
    }
]
export default function Clinets() {

    const [selected, setSelected] = React.useState(0)
    const [plus, setPlus] = React.useState(true)
    const [minus, setMinus] = React.useState(false)

    const clickHandle = () => {
        if (selected < 3) {
            setSelected(selected + 1)
            setMinus(true)
        }
        else {
            setPlus(false)
        }
    }
    const clickHandleMinus = () => {
        if (selected > 0) {
            setSelected(selected - 1)
            setPlus(true)

        }
        else {
            setMinus(false)
        }

    }
    console.log(selected)

    return (
        <div className='client'>
            <div className="client-left">
                <h1>
                What our clients 
                <br />
                 say about us
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>

            <div className=" client-right">

                {arr.map(item => (
                    item.id == selected ?

                        <div className='client-card' key={item.id}>
                            <h1>{item.description}</h1>
                            <div className="profile-conteiner">

                            <div className="profile">

                                <Image className='rounded-full w-12 h-12' src={item.img} alt={item.name} width={54} height={54} />
                                <div className="flex">
                                    <p>{item.name}</p>
                                    <p>{item.profile}</p>
                                </div>
                            </div>
                            <div className='buttons-div'>

<button className={minus ? 'button-active' : 'button-inactive'} onClick={() => clickHandleMinus()}>{'<'}</button>
<button className={plus ? 'button-active' : 'button-inactive'} onClick={() => clickHandle()}>{'>'}</button>

                            </div>
                            </div>

                        </div>

                        : ''


                ))}

            </div>

        </div>
    )
}

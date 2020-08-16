import React, { useState, useCallback } from 'react'
import { Card } from './card'
import update from 'immutability-helper'
const style = {
    width: 400,
}
const Container = (props) => {
    {
        let { setCardObj } = props
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'High Earnings',
            },
            {
                id: 2,
                text: 'Business opportunities',
            },
            {
                id: 3,
                text: 'Fun environment',
            },
            {
                id: 4,
                text: 'Fast paced environment',
            },
            {
                id: 5,
                text: 'Challenging work',
            },
            {
                id: 6,
                text: 'Opportunities to learn',
            },
            {
                id: 7,
                text: 'Teamwork environment',
            },
        ])
        const [hoverindex, setHoverIndex] = useState(cards)

        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                setHoverIndex({ hoverIndex });
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard],
                        ],
                    }, setCardObj(cards))
                )
                console.log()
            },
            [cards],
        )

        const changeCardIndex = () => {
            // console.log(cards)
        }

        useState(() => {
            console.log(hoverindex)
        }, [hoverindex])

        const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        }
        return (
            <>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </>
        )
    }
}

export default Container

import React, { useState, useCallback } from "react";
import { Card } from "./card";
import update from "immutability-helper";
import { useEffect } from "react";
const style = {
  width: 400,
};
export const Container = (props) => {
  {
    const { setCardObj } = props;
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "High Earnings",
      },
      {
        id: 2,
        text: "Business opportunities",
      },
      {
        id: 3,
        text: "Fun environment",
      },
      {
        id: 4,
        text: "Fast paced environment",
      },
      {
        id: 5,
        text: "Challenging work",
      },
      {
        id: 6,
        text: "Opportunities to learn",
      },
      {
        id: 7,
        text: "Teamwork environment",
      },
    ]);

    useEffect(() => {
      setCardObj(cards);
    }, [cards]);

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];

        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );
    const renderCard = (card, index) => {
      // props.setCardObj(card)
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};

import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Priority from "./priority";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const PriorityList = styled.div`
  padding: 8px;
`;

class Column extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>

        <Droppable droppableId={this.props.column.id}>
          {/* provided is an object with a few important purposes, props that need to be applied to the 
      component that you want to designate as droppable found in beatiful-react-dnd documentation
    */}
          {(provided) => (
            <PriorityList
              ref={provided.innerRef}
              {...provided.droppableProps}
              /* Provided object has a property called inner ref which is a function used to supply the dom node of your component to react dnd,
               a styled compoenent has a callback node called ref we provide the innerref from b-dnd to the styled component as a prop */
            >
              {this.props.priorities.map((priority, index) => (
                <Priority key={priority.id} priority={priority} index={index} />
              ))}
              {provided.placeholder}
            </PriorityList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;

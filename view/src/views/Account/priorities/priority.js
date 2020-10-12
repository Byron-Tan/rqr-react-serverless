import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

class Priority extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.priority.id} index={this.props.index}>
        {(provided) => (
          <Container
            /* The Provided object has a drabbleProps we need to be applied to the  component that we want to move 
          around in response to user input
          draghandleprops need to be applied to the part of the components that we want to use to control the entire component
           */
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.priority.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Priority;

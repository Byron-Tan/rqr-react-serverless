import React, { Component } from "react";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

/*
Example results object returned from onDragEnd
results = {
  draggableId: 'task-1',
  type: 'TYPE',
  reason: 'DROP'
  source: {
    droppableID: 'column-1',
    index: 0,
  },
  destination: {
    droppableId: 'column-1',
    index: 1,
  }
}

Source and Destination: 
These objects contain location information about where the draggable started and
 where it finished. In this case, the draggable started in column 1 in index and 
 finished in the same column, column 1 in index 1. There are cases where the destination 
 can be null, such as where the user drops outside of a list.


*/

class Priorities extends Component {
  state = initialData;

  onDragEnd = (result) => {
    // See example result object above
    const { destination, source, draggableId } = result;

    // if destination is null return to original order
    if (!destination) {
      return;
    }

    // If these two things are true,
    // then the user dropped the item back into the position that is started, so we don't need to do anything.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newPriorityIds = Array.from(column.priorityIds);
    newPriorityIds.splice(source.index, 1);
    newPriorityIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      priorityIds: newPriorityIds,
    };

    const newState = {
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const priorities = column.priorityIds.map(
            (priorityId) => this.state.priorities[priorityId]
          );
          return (
            <Column key={column.id} column={column} priorities={priorities} />
          );
        })}
      </DragDropContext>
    );
  }
}

export default Priorities;

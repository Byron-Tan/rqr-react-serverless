const initialData = {
  //first prop contains the objects that are displayed in the system, uses the task id as the key look-up for the object
  priorities: {
    "priority-1": { id: "priority-1", content: "High Earnings" },
    "priority-2": { id: "priority-2", content: "Business Opportunities" },
    "priority-3": { id: "priority-3", content: "Fun Environment" },
    "priority-4": { id: "priority-4", content: "Fast-Paced Advancement" },
    "priority-5": { id: "priority-5", content: "Challenging work" },
    "priority-6": { id: "priority-6", content: "Opportunities to learn" },
    "priority-7": { id: "priority-7", content: "Teamwork Environment" },
  },
  //colums id is used as look up for multiple column dnd an theres an array to to indicate ownership and to maintain order
  columns: {
    column1: {
      id: "column1",
      title: "Priorities",
      priorityIds: [
        "priority-1",
        "priority-2",
        "priority-3",
        "priority-4",
        "priority-5",
        "priority-6",
        "priority-7",
      ],
    },
  },
  //colum order to record order for multiple column dnd
  columnOrder: ["column1"],
};

export default initialData;

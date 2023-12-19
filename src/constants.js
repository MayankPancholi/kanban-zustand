/* ?Generates initialTaskList?

const initialTaskList = [];

const _status = ['PLANNED', 'ONGOING', 'DONE']
const timestamp = Date.now();

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const task = {
            id: window.crypto.randomUUID(),
            title: `${_status[i]} #${j+1}`,
            status: _status[i],
            timestamp: timestamp + j + 3 * i
        }
        initialTaskList.push(task)
    }
}

*/

export const initialTaskList = [
  {
    id: "a0d14c07-a13b-4eae-ad61-191e224c64c4",
    status: "PLANNED",
    timestamp: 1702638600410,
    title: "PLANNED #1",
  },
  {
    id: "7629d672-b150-49d3-a310-f8275c529326",
    status: "PLANNED",
    timestamp: 1702638600411,
    title: "PLANNED #2",
  },
  {
    id: "a1b71614-80a1-427d-abb7-85cf2a7df408",
    status: "PLANNED",
    timestamp: 1702638600412,
    title: "PLANNED #3",
  },
  {
    id: "8f280a8a-553b-4a6e-8e20-e3e82ab2895c",
    status: "ONGOING",
    timestamp: 1702638600413,
    title: "ONGOING #1",
  },
  {
    id: "520e3198-bf12-4787-bf41-2f92c6552761",
    status: "ONGOING",
    timestamp: 1702638600414,
    title: "ONGOING #2",
  },
  {
    id: "869c13d7-e0ff-40c1-8330-296023e69f26",
    status: "ONGOING",
    timestamp: 1702638600415,
    title: "ONGOING #3",
  },
  {
    id: "b1c20c74-6c55-4ad3-8552-9ddc08c2a645",
    status: "DONE",
    timestamp: 1702638600416,
    title: "DONE #1",
  },
  {
    id: "da007c87-cb93-414b-a5fa-c5cdc507ca59",
    status: "DONE",
    timestamp: 1702638600417,
    title: "DONE #2",
  },
  {
    id: "2d9af565-bd82-45d3-b786-022c101bf022",
    status: "DONE",
    timestamp: 1702638600418,
    title: "DONE #3",
  },
];

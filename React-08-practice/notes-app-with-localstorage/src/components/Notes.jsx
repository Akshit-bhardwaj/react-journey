import { useState } from "react";

const Notes = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();

    const copyTask = [...tasks];

    if (heading === "" || details === "") { //Agar heading and details empty hai to kuch mat add karo.
         return
    }

    copyTask.push({ heading, details });

    setTasks(copyTask);


    setHeading("");
    setDetails("");
  };

  const deletNotes = (idx) => {
    const copyTask = [...tasks];
    copyTask.splice(idx, 1);
    setTasks(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* LEFT: FORM */}
      <form
        className="flex flex-col gap-4 p-6 lg:w-1/2"
        onSubmit={(e) => submitHandle(e)}
      >
        <h1 className="text-3xl font-bold mb-4">Add Notes</h1>

        <input
          className="rounded p-3 w-full border-2 text-white"
          type="text"
          placeholder="Enter notes heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          className="rounded p-3 w-full h-32 border-2 text-white"
          placeholder="Write your details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="active:scale-95 px-4 py-3 bg-white text-black w-full rounded font-bold">
          Add Task
        </button>
      </form>

      {/* RIGHT: NOTES */}
      <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-700 p-6 h-full flex flex-col">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-6 overflow-y-auto flex-1">
          {tasks.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col h-52 w-40 sm:w-48 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.heading}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => deletNotes(idx)}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import CustomButton from "./components/ui/Button";
// import CustomCard from "./components/ui/Card";
// import CustomInput from "./components/ui/Input";
// import { Trash } from "lucide-react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// export default function TaskManager() {
//   const [taskInput, setTaskInput] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [nextId, setNextId] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);

//   const addTask = () => {
//     if (taskInput.trim()) {
//       setTasks([...tasks, { id: nextId, text: taskInput, aiResponse: null }]);
//       setTaskInput("");
//       setNextId(nextId + 1);
//     }
//   };

//   const removeTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const simulateAIResponse = async (id) => {
//     const task = tasks.find((task) => task.id === id);
//     if (!task || isFetching) return;

//     const genAI = new GoogleGenerativeAI(API_KEY);
//     setIsFetching(true);

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const prompt = `For the target muscle group: ${task.text}

// 1. Recommended Exercises:
// - List 3-4 effective exercises
// - Include brief form tips for each

// 2. Nutrition Recommendations:
// - List 2-3 important nutrients for this muscle group
// - Suggest 2-3 specific foods rich in these nutrients
// - Include a quick meal suggestion

// 3. Additional Tips:
// - One recovery tip
// - One training frequency suggestion

// Keep each section concise but informative.`;

//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();

//       // Parse the response into sections
//       const sections = text.split('\n\n').filter(section => section.trim());

//       setTasks(
//         tasks.map((t) =>
//           t.id === id
//             ? { ...task, aiResponse: sections }
//             : t
//         )
//       );
//     } catch (error) {
//       console.error("Error generating AI response:", error);
//       setTasks(
//         tasks.map((t) =>
//           t.id === id
//             ? { ...task, aiResponse: ["Error: Failed to fetch response."] }
//             : t
//         )
//       );
//     } finally {
//       setIsFetching(false);
//     }
//   };

//   return (
//     <motion.div
//       style={{
//         flex: 1,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
//         margin: "6px",
//         padding: "2rem",
//         border: "1px solid #e0e0e0",
//         borderRadius: "0.5rem",
//         minHeight: "20vh",
//         width: "auto",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         style={{
//           width: "100%",
//           maxWidth: "40rem",
//           borderRadius: "15px",
//         }}
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//       >
//         <CustomCard title="Today's Work" style={{ marginBottom: "1rem" }}>
//           <motion.div
//             style={{
//               display: "flex",
//               gap: "0.5rem",
//             }}
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <CustomInput
//               type="text"
//               value={taskInput}
//               onChange={(e) => setTaskInput(e.target.value)}
//               placeholder="Add a muscle group"
//               style={{ flexGrow: 2, padding: "auto" }}
//             />
//             <CustomButton onClick={addTask} style={{ backgroundColor: "red", color: "white" }}>
//               +
//             </CustomButton>
//           </motion.div>
//         </CustomCard>
//         <motion.div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "0.5rem",
//           }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           {tasks.map((task) => (
//             <motion.div
//               key={task.id}
//               style={{
//                 border: "1px solid #e0e0e0",
//                 borderRadius: "0.5rem",
//                 backgroundColor: "#f8f8f8",
//                 padding: "1rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "0.5rem",
//               }}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 + task.id * 0.05 }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//                 <p style={{ fontSize: "1.125rem", fontWeight: "bold" }}>{task.text}</p>
//               </div>
//               {task.aiResponse && (
//                 <div
//                   style={{
//                     backgroundColor: "#eef6fc",
//                     borderRadius: "0.5rem",
//                     padding: "0.75rem",
//                   }}
//                 >
//                   {task.aiResponse.map((section, index) => (
//                     <div key={index} style={{ marginBottom: "0.75rem" }}>
//                       {section.split('\n').map((line, lineIndex) => (
//                         <p 
//                           key={lineIndex} 
//                           style={{ 
//                             margin: "0.25rem 0",
//                             fontSize: "1rem",
//                             fontWeight: line.endsWith(':') ? "600" : "normal",
//                             paddingLeft: line.startsWith('-') ? "1rem" : "0"
//                           }}
//                         >
//                           {line}
//                         </p>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                 <CustomButton
//                   onClick={() => simulateAIResponse(task.id)}
//                   variant="outlined"
//                   style={{ color: "white", borderColor: "red" }}
//                   disabled={isFetching}
//                 >
//                   {isFetching ? "Fetching..." : "Get Plan"}
//                 </CustomButton>
//                 <CustomButton
//                   onClick={() => removeTask(task.id)}
//                   variant="outlined"
//                   style={{ color: "white", borderColor: "red" }}
//                 >
//                   <Trash className="w-4 h-4" />
//                 </CustomButton>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomButton from "./components/ui/Button";
import CustomCard from "./components/ui/Card";
import CustomInput from "./components/ui/Input";
import { Trash } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export default function TaskManager() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // Fetch tasks from the backend when the user logs in
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem("userId");  // Assuming you store the userId here
        if (!userId) {
          return handleError("You need to be logged in first!");
        }
  
        const response = await axios.get(`https://deployed-react-app-backend-pa7mmp1uz.vercel.app/tasks/all/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,  // Assuming you're storing the token here
          },
        });
  
        if (response.status === 200 && response.data.success) {
          setTasks(response.data.tasks || []); // Map to tasks array
        } else {
          handleError("Failed to fetch tasks.");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        handleError("Failed to fetch tasks.");
      }
    };
  
    fetchTasks();
  }, []);

  // Add new task to the list
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: nextId, title: taskInput }]);
      setTaskInput("");
      setNextId(nextId + 1);
    }
  };

  // Remove a task from the list
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Simulate AI response for a task
  const simulateAIResponse = async (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task || isFetching) return;

    const genAI = new GoogleGenerativeAI(API_KEY);
    setIsFetching(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `For the target muscle group: ${task.title}

1. Recommended Exercises:
- List 3-4 effective exercises
- Include brief form tips for each

2. Nutrition Recommendations:
- List 2-3 important nutrients for this muscle group
- Suggest 2-3 specific foods rich in these nutrients
- Include a quick meal suggestion

3. Additional Tips:
- One recovery tip
- One training frequency suggestion

Keep each section concise but informative.`;

      const result = await model.generateContent(prompt);
      const text = await result.response.text();

      const sections = text.split('\n\n').filter(section => section.trim());

      setTasks(
        tasks.map((t) =>
          t.id === id
            ? { ...task, aiResponse: sections }
            : t
        )
      );
    } catch (error) {
      console.error("Error generating AI response:", error);
      setTasks(
        tasks.map((t) =>
          t.id === id
            ? { ...task, aiResponse: ["Error: Failed to fetch response."] }
            : t
        )
      );
    } finally {
      setIsFetching(false);
    }
  };

  // Save tasks to the backend
  const saveTasks = async () => {
    try {
      // Prepare the task data (no AI responses are saved)
      const taskData = tasks.map((task) => ({
        title: task.title,  // Send only the title (text) and description (empty for now)
        description: "",
      }));
  
      const userId = localStorage.getItem("userId");  // Assuming you're storing the userId here
      const token = localStorage.getItem("authToken");
  
      if (!userId) {
        
        return handleError("You need to be logged in first!");
      }
  
      const response = await axios.post(
        "https://deployed-react-app-backend-pa7mmp1uz.vercel.app/tasks/add",  
        { tasks: taskData, userId },  // Send the entire task list with userId
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Send the token in the request header
          },
        }
      );
  
      if (response.status === 200) {
        handleSuccess("Tasks saved successfully!");
      } else {
        handleError("Failed to save tasks. Please try again.");
      }
    } catch (error) {
      console.error("Error saving tasks:", error);
      handleError("Failed to save tasks. Please try again.");
    }
  };

  return (
    <motion.div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        margin: "6px",
        padding: "2rem",
        border: "1px solid #e0e0e0",
        borderRadius: "0.5rem",
        minHeight: "20vh",
        width: "auto",
        overflow: "scroll",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: "100%",
          maxWidth: "40rem",
          borderRadius: "15px",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CustomCard title="Today's Work" style={{ marginBottom: "1rem" }}>
          <motion.div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CustomInput
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a muscle group"
              style={{ flexGrow: 2, padding: "auto" }}
            />
            <CustomButton
              onClick={addTask}
              style={{ backgroundColor: "red", color: "white" }}
            >
              +
            </CustomButton>
          </motion.div>
        </CustomCard>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "0.5rem",
                backgroundColor: "#f8f8f8",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + task.id * 0.05 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <p style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
                  {task.title}
                </p>
              </div>
              {task.aiResponse && (
                <div
                  style={{
                    backgroundColor: "#eef6fc",
                    borderRadius: "0.5rem",
                    padding: "0.75rem",
                  }}
                >
                  {task.aiResponse.map((section, index) => (
                    <div key={index} style={{ marginBottom: "0.75rem" }}>
                      {section.split("\n").map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          style={{
                            margin: "0.25rem 0",
                            fontSize: "1rem",
                            fontWeight: line.endsWith(":") ? "600" : "normal",
                            paddingLeft: line.startsWith("-") ? "1rem" : "0",
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CustomButton
                  onClick={() => simulateAIResponse(task.id)}
                  variant="outlined"
                  style={{ color: "white", borderColor: "red" }}
                  disabled={isFetching}
                >
                  {isFetching ? "Fetching..." : "Get Plan"}
                </CustomButton>
                <CustomButton
                  onClick={() => removeTask(task.id)}
                  variant="outlined"
                  style={{ color: "white", borderColor: "red" }}
                >
                  <Trash className="w-4 h-4" />
                </CustomButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Save Tasks Button */}
        <motion.div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CustomButton
            onClick={saveTasks}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Save All Tasks
          </CustomButton>
        </motion.div>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
}

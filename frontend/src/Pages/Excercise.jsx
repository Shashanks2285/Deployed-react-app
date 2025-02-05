// import React, { useState } from 'react';
// import Button from './Components/ui/Button';
// import CustomInput from './Components/ui/Input';
// import './Excercise.css';
// import { fetchData, exerciseOptions } from '../utils';

// function Exercise() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [exercises, setExercises] = useState([]); // Array for exercises
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleSearch = async () => {
//     if (searchTerm.trim() === '') {
//       alert('Please enter a search term.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm}`;
//       const exerciseData = await fetchData(url, exerciseOptions);

//       if (!Array.isArray(exerciseData) || exerciseData.length === 0) {
//         alert('No exercises found. Please try a different search term.');
//       } else {
//         setExercises(exerciseData); // Store exercises data
//         setCurrentPage(1); // Reset to the first page
//       }
//     } catch (error) {
//       console.error('Error fetching exercise data:', error);
//       alert('Failed to fetch data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = exercises.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(exercises.length / itemsPerPage);

//   const handlePageChange = (direction) => {
//     if (direction === 'next' && currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     } else if (direction === 'prev' && currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="exercise-container">
//       {/* Wrapper for input and search button */}
//       <div className="input-button-container">
//         <CustomInput
//           type="text"
//           placeholder="Search for a body part (e.g., back, chest, legs)..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="exercise-input"
//         />
//         <Button onClick={handleSearch} className="exercise-button">
//           {loading ? 'Searching...' : 'Search'}
//         </Button>
//       </div>

//       {/* Results */}
//       <div className="results">
//         {currentItems.length > 0 && (
//           <div className="exercise-slider">
//             {currentItems.map((exercise) => (
//               <div key={exercise.id} className="exercise-card">
//                 <h3>{exercise.name}</h3>
//                 <img src={exercise.gifUrl} alt={exercise.name} className="exercise-gif" />
//                 <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
//                 <p><strong>Target Muscle:</strong> {exercise.target}</p>
//                 <p><strong>Equipment:</strong> {exercise.equipment}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Horizontal Pagination Controls */}
//         {exercises.length > itemsPerPage && (
//           <div className="pagination-controls">
//             <button
//               onClick={() => handlePageChange('prev')}
//               disabled={currentPage === 1}
//               className="pagination-button"
//             >
//               &lt; Previous
//             </button>
//             <span className="pagination-info">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => handlePageChange('next')}
//               disabled={currentPage === totalPages}
//               className="pagination-button"
//             >
//               Next &gt;
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Exercise;

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from './components/Exercises';
import SearchExercises from './components/SearchExercises';

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers all child components horizontally
        overflowX: 'hidden', // Prevents horizontal scroll
        px: { xs: 2, lg: 4 }, // Adds padding for responsiveness
        boxSizing: 'border-box',
      }}
    >
      {/* Search and Exercises */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px', // Limits the width for large screens
          flexGrow: 1,
          mt: 4,
        }}
      >
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </Box>
    </Box>
  );
};

export default Exercise;

// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography } from '@mui/material';

// import { exerciseOptions, fetchData } from '../../utils';
// import HorizontalScrollbar from './HorizontalScrollbar';

// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
//   const [search, setSearch] = useState('');
//   const [bodyParts, setBodyParts] = useState([]);

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

//       setBodyParts(['all', ...bodyPartsData]);
//     };

//     fetchExercisesData();
//   }, []);

//   const handleSearch = async () => {
//     if (search) {
//       const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

//       const searchedExercises = exercisesData.filter(
//         (item) => item.name.toLowerCase().includes(search)
//                || item.target.toLowerCase().includes(search)
//                || item.equipment.toLowerCase().includes(search)
//                || item.bodyPart.toLowerCase().includes(search),
//       );

//       window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

//       setSearch('');
//       setExercises(searchedExercises);
//     }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
//           Search
//         </Button>
//       </Box>
//       <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
//         <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;


import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      mt={4}
      justifyContent="center"
      sx={{
        width: '100%',
        px: { xs: 2, lg: 4 },
        boxSizing: 'border-box',
      }}
    >
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" width="100%" maxWidth="900px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none'},  
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '4px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            position: 'absolute',
            right: '4px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: '80px', lg: '150px' },
            height: '50px',
            backgroundColor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            fontSize: { xs: '14px', lg: '18px' },
            borderRadius: '3px',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

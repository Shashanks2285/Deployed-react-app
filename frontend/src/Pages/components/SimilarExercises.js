// import React from 'react';
// import { Typography, Box, Stack } from '@mui/material';

// import HorizontalScrollbar from './HorizontalScrollbar';
// import Loader from './Loader';

// const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
//   <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
//     <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
//       Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
//     </Typography>
//     <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
//       {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
//     </Stack>
//     <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
//       Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
//     </Typography>
//     <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
//       {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
//     </Stack>
//   </Box>
// );

// export default SimilarExercises;

import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }} p="20px">
    {/* Target Muscle Exercises */}
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack
      direction="row"
      sx={{
        p: 2,
        position: 'relative',
        overflowX: 'auto',
        justifyContent: 'flex-start',
        gap: { xs: '10px', lg: '20px' },
      }}
    >
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* Equipment Exercises */}
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack
      direction="row"
      sx={{
        p: 2,
        position: 'relative',
        overflowX: 'auto',
        justifyContent: 'flex-start',
        gap: { xs: '10px', lg: '20px' },
      }}
    >
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;

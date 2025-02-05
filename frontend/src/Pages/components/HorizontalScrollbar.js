// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { Box, Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';
// import BodyPart from './BodyPart';
// import RightArrowIcon from '../../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//     {data.map((item) => (
//       <Box
//         key={item.id || item}
//         itemId={item.id || item}
//         title={item.id || item}
//         m="0 40px"
//       >
//         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
//       </Box>
//     ))}
//   </ScrollMenu>
// );

// export default HorizontalScrollbar;


import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="arrow"
      sx={{
        display: { xs: 'none', sm: 'block' }, // Hide on small screens
        cursor: 'pointer',
        position: 'absolute',
        left: '0',
        zIndex: '10',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '50%',
        '& img': {
          width: '30px',
          height: '30px',
        },
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="arrow"
      sx={{
        display: { xs: 'none', sm: 'block' }, // Hide on small screens
        cursor: 'pointer',
        position: 'absolute',
        right: '0',
        zIndex: '10',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '50%',
        '& img': {
          width: '30px',
          height: '30px',
        },
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box
    sx={{
      position: 'relative',
      padding: '20px 0',
      width: '100%',
    }}
  >
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 15px" // Adjusted margin for better spacing
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '80%', sm: '200px', md: '250px', lg: '300px' }, // Responsive width
            boxSizing: 'border-box',
          }}
        >
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;

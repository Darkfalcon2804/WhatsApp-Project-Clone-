import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
const Message = ([message]) => {
  return (
    <Box>
        <Typography>
            {message.text}
        </Typography>
        <Typography>
            {message.createdAt}
        </Typography>
    </Box>
  )
}

export default Message
import React from 'react';
import {useGameStore} from '../../../context/gameContext';
import {Box, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {parseTime} from '../../../utils/parseTime';

const WinnerHistory = () => {
    const [state, dispatch] = useGameStore()

    const showList = state.winnerHistory.map((el, idx) =>
        <ListItem key={idx} alignItems="flex-start" style={{color: '#fff'}}>
            <ListItemText
                primary={`Winner ${el.winner}`}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                        >
                            {`Date ${parseTime(el.date)}`}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )

    return (
        <Box mr={3} style={{color: '#fff'}}>
            <Typography variant='h6' component='p'>Winners</Typography>
            <List>
                {showList}
            </List>
        </Box>
    )
}

export default WinnerHistory;

import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import style from './CompetitionCard.module.css'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux';

const CompetitionCard = ({competition}) => {

    const {winners} = useSelector(state => state.users)

    const history = useHistory()

    const onShow = (id) => {
        history.push(`/competition/${id}`)
    }

    return (
        <Box className={style.card}>
            <Typography>ID: {competition.id}</Typography>
            <Typography>Name: {competition.name}</Typography>
            <Typography>Status: {winners[competition.id]?.isWinner ? 'Finished' : 'Active'}</Typography>
            {winners[competition.id]?.winner && <Typography>Winner: {winners[competition.id].winner.name}</Typography>}
            <Box mt={2}>
                <Button fullWidth onClick={() => onShow(competition.id)}>Show</Button>
            </Box>
        </Box>
    )
}

export default CompetitionCard;

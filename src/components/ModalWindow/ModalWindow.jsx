import * as React from 'react';
import {Backdrop, Box, Fade, Modal} from '@material-ui/core';
import {useGameStore} from '../../context/gameContext';
import {toggleModalOpener} from '../../reducers/gameReducer/gameActions';
import NicknamesForm from './NicknamesForm/NicknamesForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
};

export default function ModalWindow() {
    const [state, dispatch] = useGameStore()

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={state.modalIsOpen}
                onClose={() => dispatch(toggleModalOpener())}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={state.modalIsOpen}>
                    <Box sx={style}>
                        <NicknamesForm />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

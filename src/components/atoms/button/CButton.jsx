import { Button } from '@mui/material';

function CButton({ onClick, children }) {
    return (
        <Button onClick={onClick} variant="contained" color="success" sx={{ "mt": 4 }} >{children}</Button>
    )
}

export default CButton
import { styled } from "@mui/material";
import Button, {ButtonProps} from "@mui/material/Button";

const CustomButtonStyled = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: "pink",
    }
}))

export default CustomButtonStyled;
// simple
export const textFieldStyleProps = {
    "& .MuiFormLabel-root": {
        color: '#003878'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: '#003878'
    },
    '& .MuiInputBase-root::after': {
        borderBottom: '1px solid #003878',
    },
    '& .MuiInputBase-root': {
        color: '#003878'
    },   
}

// error
export const textFieldErrorStyleProps = {
    "& .MuiFormLabel-root": {
        color: 'red'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: 'red'
    },
    '& .MuiInputBase-root::after': {
        borderBottom: '1px solid red',
    },
    '& .MuiInputBase-root': {
        color: 'red'
    },
}
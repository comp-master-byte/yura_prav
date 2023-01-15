import React from "react";
import styles from "./SignUpForm.module.scss";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const SignUpForm = () => {
    return (
        <form className={styles.signUpForm}>
            <div className={styles.signUpInputs}>
                <TextField
                    label="Имя"
                    name="first_name"
                    className={styles.signUpInputs__input}
                    variant="standard"
                />
                <TextField
                    label="Фамилия"
                    name="last_name"
                    className={styles.signUpInputs__input}
                    variant="standard"
                />
            </div>

            <div className={styles.signUpInputs}>
                <FormControl
                    className={styles.signUpInputs__input}
                >
                    <InputLabel id="demo-simple-select-label">Вы юрист?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="standard"
                    >
                        <MenuItem>Да</MenuItem>
                        <MenuItem>Нет</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    className={styles.signUpInputs__input}
                >
                    <InputLabel id="demo-simple-select-label">Выберите пол</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="standard"
                    >
                        <MenuItem>Мужчина</MenuItem>
                        <MenuItem>Женщина</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className={styles.signUpInputs}>
                <TextField
                    label="Email"
                    name="email"
                    className={styles.signUpInputs__input}
                    variant="standard"
                />
                <TextField
                    label="Пароль"
                    name="password"
                    type="password"
                    className={styles.signUpInputs__input}
                    variant="standard"
                />
            </div>

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </form>
    )
}

export default SignUpForm
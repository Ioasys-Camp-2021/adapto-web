import React, { useState, InputHTMLAttributes } from 'react';

import { FieldError } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import {
  Wrapper,
  Label,
  Container,
  TextInput,
  IconButton,
  ErrorIcon,
  ErrorMessage,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  icon?: string;
  error?: FieldError;
  passwordInput?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  labelFor,
  icon,
  error,
  passwordInput,
  style,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper style={style}>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}

      <Container hasError={!!error}>
        <TextInput
          id={labelFor}
          {...rest}
          type={passwordInput && !showPassword ? 'password' : 'text'}
        />

        {error ? (
          <ErrorIcon />
        ) : (
          <>
            {passwordInput && (
              <IconButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </IconButton>
            )}
          </>
        )}
      </Container>

      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};

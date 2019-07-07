import React, { memo, useRef } from 'react';
import { Formik, FormikProps } from 'formik';
import { RouteChildrenProps } from 'react-router';
import TextInput from '../../components/Form/TextInput';
import { FormErros, FormProps } from './types';
import { postSignup } from '../../request/services/signup';
import { Content } from './style';

function SignUp(props: RouteChildrenProps): JSX.Element {
  const refEmail = useRef<HTMLInputElement>();

  return (
    <Content>
      <Formik
        initialValues={{ email: '' }}
        validate={(values): FormErros => {
          const errors: FormErros = {};
          if (!values.email) {
            errors.email = 'digite seu e-mail para continuar';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'esse e-mail não é válido';
          }
          return errors;
        }}
        onSubmit={(values): void => {
          refEmail.current.blur();
          postSignup(values.email, props.history).then();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }: FormikProps<FormProps>): JSX.Element => (
          <div>
            <form onSubmit={handleSubmit}>
              <TextInput
                label="email"
                name="email"
                ref={refEmail}
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email}
                touched={touched.email}
              />
              <button
                style={{ opacity: 0, position: 'absolute', left: -9999 }}
                type="submit"
              >
                entrar
              </button>
            </form>
          </div>
        )}
      </Formik>
    </Content>
  );
}

export default memo(SignUp);

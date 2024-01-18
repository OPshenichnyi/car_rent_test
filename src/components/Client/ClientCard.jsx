import { WrapClientCard } from "./ClientCard.styled.js";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const ClientCard = () => {
  return (
    <WrapClientCard>
      <h4>Add Client</h4>
      <Formik
        initialValues={{
          nameCompany: "",
          contactPerson: "",
          phone: "",
          email: "",
          location: "",
        }}
        // validate={}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Name Company</label> <br />
            <Field type="nameCompany" name="nameCompany" />
            <br />
            <ErrorMessage name="nameCompany" component="div" />
            <br />
            <label>Name Contact Person</label> <br />
            <Field type="contactPerson" name="contactPerson" />
            <br />
            <ErrorMessage name="contactPerson" component="div" />
            <br />
            <label>Phone number</label> <br />
            <Field type="phone" name="phone" />
            <br />
            <ErrorMessage name="phone" component="div" />
            <br />
            <label>Email</label> <br />
            <Field type="email" name="email" />
            <br />
            <ErrorMessage name="email" component="div" />
            <br />
            <label>Location</label> <br />
            <Field type="location" name="location" />
            <br />
            <ErrorMessage name="location" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Add Client
            </button>
          </Form>
        )}
      </Formik>
    </WrapClientCard>
  );
};

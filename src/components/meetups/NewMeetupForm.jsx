import { useFormik } from "formik";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.image) {
    errors.image = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }

  return errors;
};

const NewMeetupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      address: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div>{formik.errors.title}</div>
          )}
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image && (
            <div>{formik.errors.image}</div>
          )}
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div>{formik.errors.address}</div>
          )}
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div>{formik.errors.description}</div>
          )}
        </div>

        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

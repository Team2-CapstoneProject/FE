import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVillas,
  addVillaAction,
  editVillaAction,
  deleteVillaAction,
} from "../../../redux/actions/DashboardActions";
import Swal from "sweetalert2";
import "./Villa.css";
import "react-responsive-modal/styles.css";
import { Formik, Form, Field } from "formik";
import { Modal } from "react-responsive-modal";

const VillaPage = () => {
  const dispatch = useDispatch();
  const villas = useSelector((state) => state.dashboard.villas);
  const loading = useSelector((state) => state.dashboard.loading);
  const error = useSelector((state) => state.dashboard.error);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchVillas());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      await dispatch(addVillaAction(values));

      closeModal();

      Swal.fire({
        icon: "success",
        title: "Villa Added",
        text: "A new villa has been successfully added.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Villa Addition Failed",
        text: "Failed to add the new villa. Please try again.",
      });
    }
  };

  const handleEdit = (id) => {
    dispatch(editVillaAction(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteVillaAction(id));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="villa-page-container">
      <h1>Villa List</h1>
      <button className="add-villa-button" onClick={openModal}>
        Add Villa
      </button>

      <Modal open={isModalOpen} onClose={closeModal}>
        <h2>Add New Villa</h2>
        <Formik
          initialValues={{
            name: "",
            price: "",
            description: "",
            location: "",
            imageUrls: "",
            facilities: [1, 2, 3],
            longitude: null,
            latitude: null,
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="villa-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <Field
                  type="text"
                  id="price"
                  name="price"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="imageUrls" className="form-label">
                  Villa Image URLs:
                </label>
                <Field
                  type="text"
                  id="imageUrls"
                  name="imageUrls"
                  className="form-input"
                  value={values.imageUrls}
                  onChange={(e) => setFieldValue("imageUrls", e.target.value)}
                  placeholder="Enter image URLs separated by commas"
                />
              </div>

              <button type="submit" className="form-submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Modal>

      <table className="villa-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {villas.map((villa) => (
            <tr key={villa.id}>
              <td>{villa.id}</td>
              <td>{villa.name}</td>
              <td>{villa.price}</td>
              <td>{villa.description}</td>
              <td>{villa.location}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(villa.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(villa.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VillaPage;

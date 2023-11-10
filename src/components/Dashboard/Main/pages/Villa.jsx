import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVillas,
  addVillaAction,
  editVillaAction,
  deleteVillaAction,
} from "../../../../redux/actions/DashboardActions";

import "react-responsive-modal/styles.css";
import { Formik, Form, Field } from "formik";
import { Modal } from "react-responsive-modal";

const Villa = () => {
  const dispatch = useDispatch();
  const villas = useSelector((state) => state.dashboard.villas);
  const loading = useSelector((state) => state.dashboard.loading);
  const error = useSelector((state) => state.dashboard.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchVillas());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setIsErrorModalOpen(true);
    }
  }, [error]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleSubmit = (values) => {
    dispatch(addVillaAction(values));
    closeModal();
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
    <div>
      <h1>Villa List</h1>
      <button onClick={openModal}>Add Villa</button>

      <Modal open={isModalOpen} onClose={closeModal}>
        <h2>Add New Villa</h2>
        <Formik
          initialValues={{
            name: "",
            price: "",
            description: "",
            location: "",
            images: [],
            facilities: [1, 2, 3],
            longitude: null,
            latitude: null,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
            </div>

            <div>
              <label htmlFor="price">Price:</label>
              <Field type="text" id="price" name="price" />
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <Field as="textarea" id="description" name="description" />
            </div>

            <div>
              <label htmlFor="location">Location:</label>
              <Field type="text" id="location" name="location" />
            </div>

            <div>
              <label htmlFor="images">Villa Images:</label>
              <Field type="text" id="images" name="images" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Modal>

      {isErrorModalOpen && (
        <Modal open={isErrorModalOpen} onClose={closeErrorModal}>
          <h2>Error</h2>
          <p>{error}</p>
        </Modal>
      )}

      <table>
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
                <button onClick={() => handleEdit(villa.id)}>Edit</button>
                <button onClick={() => handleDelete(villa.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Villa;

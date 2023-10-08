import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const AddCategory = () => {
  const [id, setId] = useState("");
  const [course_category_name, setCourseCategory] = useState("");
  const [category, setcategory] = useState([]);
  const [showReadModal, setShowReadModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [AddCategoryModal, setAddCategoryModal] = useState(false);

  useEffect(() => {
    getcategoryList();
  }, []);

  const handleRead = (rowData) => {
    setSelectedData(rowData);
    setShowReadModal(true);
  };

  const handleEdit = (rowData) => {
    setSelectedData(rowData);
    setEditedData({ ...rowData });
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setAddCategoryModal(true);
  };

  const handleDelete = (rowData) => {
    setSelectedData(rowData);
    setShowDeleteModal(true);
  };

  const getcategoryList = async () => {
    console.log(id, course_category_name);
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
    //     "Content-Type": "application/json",
    //   },
    // };
    axios.get("http://127.0.0.1:8000/api/course-categories").then(
      (response) => {
        console.log(response);
        setcategory(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const addCategory = async () => {
    console.log(id, course_category_name);
    axios
      .post("http://127.0.0.1:8000/api/course-categories", {
        course_category_name: course_category_name,
      })
      .then(
        (response) => {
          console.log(response);
          setAddCategoryModal(false);
          setcategory((e) => [...e , response.data.data]);
          setCourseCategory('');
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const handleSaveEdit = async () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
    //         "Content-Type": "application/json",
    //     },
    // };
    axios
      .post("http://127.0.0.1:8000/api/course-categories/id", {
        id: id,
        course_category_name: course_category_name,
      })
      .then(
        (response) => {
          sessionStorage.removeItem("update");
          setShowEditModal(false);
          // toast.success("Sport is Successfully Updated!")
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/course-categories/${selectedData.id}`
      );
      setShowDeleteModal(false);
      setcategory((cat) => cat.filter((val) => val.id != selectedData.id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="d=flex flex-column justify-content-center align-items-center bg-light vh-100">
      {/* <h1> List of Categories here</h1>
      <div className="w-100 rounded bg-white">
        <Button variant="primary" onClick={() => addcategoryList(true)}>
          Add Category +
        </Button>
      </div> */}
      <div className="row p-4">
        <div className="col-md-9">
          <h1>Category List</h1>
        </div>
        <div className="col-md-3 d-flex align-item-center justify-content-center">
          <button className="btn btn-primary" onClick={() => handleAdd()}>
            Add Category +
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Course Title</th>
            <th>Your Achievements</th>
            <th>Mode Of Delivery</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index) => (
            <tr key={item.id}>
              <td> {item.id} </td>
              <td> {item.course_category_name} </td>
              <td> {item.course_category_name} </td>
              <td> {item.course_category_name} </td>
              <td> {item.course_category_name} </td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={AddCategoryModal} onHide={() => setAddCategoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4" style={{ "padding-left": "40px" }}>
              <span>Category:</span>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                placeholder="category name"
                value={course_category_name}
                onChange={(e) => setCourseCategory(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setAddCategoryModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>ID: {selectedData.id}</p>
          <p>
            Category:{" "}
            <input
              type="text"
              value={editedData.course_category_name}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  course_category_name: e.target.value,
                })
              }
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete ID {selectedData.id} -{" "}
          {selectedData.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCategory;

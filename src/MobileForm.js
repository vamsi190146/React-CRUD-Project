// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const MobileForm = ({ mobile, onSave }) => {
//   const [formData, setFormData] = useState({
//     modelName: '',
//     price: '',
//     company: ''
//   });

//   useEffect(() => {
//     if (mobile) {
//       setFormData(mobile);
//     }
//   }, [mobile]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//     setFormData({ modelName: '', price: '', company: '' });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formModelName">
//         <Form.Label>Model Name</Form.Label>
//         <Form.Control
//           type="text"
//           name="modelName"
//           value={formData.modelName}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="formPrice">
//         <Form.Label>Price</Form.Label>
//         <Form.Control
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="formCompany">
//         <Form.Label>Company</Form.Label>
//         <Form.Control
//           type="text"
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Save
//       </Button>
//     </Form>
//   );
// };

// export default MobileForm;

import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const MobileForm = ({ mobile, onSave }) => {
  const [formData, setFormData] = useState({
    modelName: '',
    price: '',
    company: ''
  });

  useEffect(() => {
    if (mobile) {
      setFormData(mobile);
    }
  }, [mobile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ modelName: '', price: '', company: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formModelName">
        <Form.Label>Model Name</Form.Label>
        <Form.Control
          type="text"
          name="modelName"
          value={formData.modelName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default MobileForm;

// import React, { useState, useEffect } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import axios from 'axios';
// import MobileTable from './MobileTable';
// import MobileForm from './MobileForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [currentMobile, setCurrentMobile] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const storedMobiles = JSON.parse(localStorage.getItem('mobiles'));
//     if (storedMobiles && storedMobiles.length > 0) {
//       setMobiles(storedMobiles);
//     } else {
//       fetchMobiles();
//     }
//   }, []);

//   const fetchMobiles = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       const data = response.data.map((item) => ({
//         id: item.id,
//         modelName: item.title,
//         price: Math.floor(Math.random() * 1000) + 1,
//         company: 'Company ABC'
//       }));
//       setMobiles(data);
//       localStorage.setItem('mobiles', JSON.stringify(data));
//     } catch (error) {
//       console.error('Error fetching mobiles:', error);
//     }
//   };

//   const handleSave = (mobile) => {
//     let updatedMobiles;
//     if (mobile.id) {
//       updatedMobiles = mobiles.map((item) =>
//         item.id === mobile.id ? mobile : item
//       );
//     } else {
//       const newMobile = {
//         ...mobile,
//         id: mobiles.length + 1
//       };
//       updatedMobiles = [...mobiles, newMobile];
//     }
//     setMobiles(updatedMobiles);
//     localStorage.setItem('mobiles', JSON.stringify(updatedMobiles));
//     setShowModal(false);
//   };

//   const handleEdit = (mobile) => {
//     setCurrentMobile(mobile);
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     const updatedMobiles = mobiles.filter((mobile) => mobile.id !== id);
//     setMobiles(updatedMobiles);
//     localStorage.setItem('mobiles', JSON.stringify(updatedMobiles));
//   };

//   return (
//     <Container>
//       <h1 className="my-4">Mobile Details</h1>
//       <Button variant="primary" onClick={() => setShowModal(true)}>
//         Create Mobile
//       </Button>
//       <MobileTable mobiles={mobiles} onEdit={handleEdit} onDelete={handleDelete} />
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{currentMobile ? 'Edit Mobile' : 'Create Mobile'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <MobileForm mobile={currentMobile} onSave={handleSave} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import MobileTable from './MobileTable';
import MobileForm from './MobileForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [mobiles, setMobiles] = useState([]);
  const [currentMobile, setCurrentMobile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMobiles();
  }, []);

  const fetchMobiles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/mobiles');
      setMobiles(response.data);
    } catch (error) {
      console.error('Error fetching mobiles:', error);
    }
  };

  const handleSave = (mobile) => {
    if (mobile.id) {
      const updatedMobiles = mobiles.map((item) =>
        item.id === mobile.id ? mobile : item
      );
      setMobiles(updatedMobiles);
      axios.put(`http://localhost:4000/mobiles/${mobile.id}`, mobile);
    } else {
      const newMobile = {
        ...mobile,
        id: mobiles.length + 1
      };
      setMobiles([...mobiles, newMobile]);
      axios.post('http://localhost:4000/mobiles', newMobile);
    }
    setShowModal(false);
  };

  const handleEdit = (mobile) => {
    setCurrentMobile(mobile);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updatedMobiles = mobiles.filter((mobile) => mobile.id !== id);
    setMobiles(updatedMobiles);
    axios.delete(`http://localhost:4000/mobiles/${id}`);
  };

  return (
    <Container>
      <h1 className="my-4">Mobile Details</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Create Mobile
      </Button>
      <MobileTable mobiles={mobiles} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentMobile ? 'Edit Mobile' : 'Create Mobile'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MobileForm mobile={currentMobile} onSave={handleSave} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default App;

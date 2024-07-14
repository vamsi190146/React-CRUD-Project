// import React from 'react';
// import { Table, Button } from 'react-bootstrap';

// const MobileTable = ({ mobiles, onEdit, onDelete }) => {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Model Name</th>
//           <th>Price</th>
//           <th>Company</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {mobiles.map((mobile) => (
//           <tr key={mobile.id}>
//             <td>{mobile.modelName}</td>
//             <td>{mobile.price}</td>
//             <td>{mobile.company}</td>
//             <td>
//               <Button variant="warning" onClick={() => onEdit(mobile)}>
//                 Edit
//               </Button>{' '}
//               <Button variant="danger" onClick={() => onDelete(mobile.id)}>
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default MobileTable;

import React from 'react';
import { Table, Button } from 'react-bootstrap';

const MobileTable = ({ mobiles, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Model Name</th>
          <th>Price</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {mobiles.map((mobile) => (
          <tr key={mobile.id}>
            <td>{mobile.modelName}</td>
            <td>{mobile.price}</td>
            <td>{mobile.company}</td>
            <td>
              <Button variant="warning" onClick={() => onEdit(mobile)}>
                Edit
              </Button>{' '}
              <Button variant="danger" onClick={() => onDelete(mobile.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MobileTable;

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((datas) => {
    datas.results.forEach((user) => {
      baris_table_tag.innerHTML += `
      <tr>
        <td><img src="${user.picture.medium}"</td>
         <td>${user.name.first} ${user.name.last}</td>
         <td>${user.location.street.name} ${user.location.street.number}</td>
         <td>${user.email}</td>
         <td>${user.phone}</td>
      </tr>
     `;
    });
  });

// binding element
let baris_table_tag = document.getElementById("baris_table");

// baris_table_tag.innerHTML += `
//     <tr>
//         <td>Abi</td>
//         <td>Sukma</td>
//         <td>Abii@gmail.com</td>
//         <td>0812345678</td>
//     </tr>
//     `;

// for (let i = 0; i < 10; i++) {
//   baris_table_tag.innerHTML += `
//   <tr>
//       <td>Abi</td>
//       <td>Sukma</td>
//       <td>Abii@gmail.com</td>
//       <td>0812345678</td>
//   </tr>`;
// }

// let i = 0;
// while (i < 10) {
//   baris_table_tag.innerHTML += `
//   <tr>
//       <td>Abi</td>
//       <td>Sukma</td>
//       <td>Abii@gmail.com</td>
//       <td>0812345678</td>
//   </tr>`;
//   i++;
// }

{
  /* <tr>
  <td>Abi</td>
  <td>Sukma</td>
  <td>Abii@gmail.com</td>
  <td>0812345678</td>
</tr> */
}

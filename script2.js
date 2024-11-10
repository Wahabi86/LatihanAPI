fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((datas) => {
    datas.results.forEach((user) => {
      baris_table_tag.innerHTML += `
         <tr>
            <td>
              <div class="row">
                <div class="col-md-2">
                <img src="${user.picture.large}" class="img-fluid">
                </div>
                <div class="col-md-10">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>
                ${user.location.street.name}
                <br>
                ${user.email}
                <br>
                ${user.phone}
                </p>
                </div>
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-secondary">Detail</button>
              <button type="button" class="btn btn-success">Edit</button>
              <button type="button" class="btn btn-danger">Danger</button>
            </td>
          </tr>`;
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

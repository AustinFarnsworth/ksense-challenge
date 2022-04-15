const url = "https://jsonplaceholder.typicode.com";

let table = document.getElementById("table-body"),
  rowIndex;

const getUsers = () => {
  axios
    .get(url + "/users")
    .then((res) => {
      const data = res.data;
      console.log(res.data);

      data.map((users) => {
        let row = `<tr  class="name" >
                      <td>
                        <divid="name">${users.name}</divid=>
                      </td>
                      <td>${users.username}</td>
                      <td>${users.email}</td>
                  </tr>`;

        table.innerHTML += row;
      });

      for (let i = 0; i < table.rows.length; i++) {
        let id = table.rows[i];

        id.onclick = function () {
          rowIndex = this.rowIndex - 1;

          axios
            .get(url + `/posts?userId=${rowIndex}`)
            .then((res) => {
              const posts = res.data;

              let postsSection = document.getElementById("posts-section");

              posts.map((post) => {
                let usersPosts = `<ul>
                          <li>User Id:${post.userId}</li>
                          <label>Post Title:</label>
                          <li>${post.title}</li>
                          <label>Post Content:</label>
                          <li>${post.body}</li>
                       </ul>`;

                postsSection.innerHTML += usersPosts;
              });
            })
            .catch((err) => {
              console.log(err);
            });
        };
      }
    })

    .catch((err) => {
      console.log(err);
    });
};

getUsers();

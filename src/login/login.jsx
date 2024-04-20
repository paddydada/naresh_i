// import "./login.css";

// export function Login() {
//   return (
//     <div className="display-center">
//       <form className="form-login alert alert-dismissible alert-warning">
//         <button data-bs-dismiss="alert" className="btn btn-close"></button>
//         <dl>
//           <h2>
//             {" "}
//             <span className="bi bi-person-fill"></span> User Login
//           </h2>
//           <dt>User Name</dt>
//           <dd>
//             <input type="text" className="form-control" />
//           </dd>
//           <dt>Password</dt>
//           <dd>
//             <input type="password" className="form-control" />
//           </dd>
//         </dl>
//         <button className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// }

export function Login() {
  return (
    <div className="display-center">
      <button
        data-bs-target="#login"
        data-bs-toggle="modal"
        className="btn btn-primary mt-4"
      >
        Login
      </button>
      <div className="modal fade" id="login">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="bi bi-person-fill"> User Login </h2>
              <button
                className="btn btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <dl>
                <dt>User Name</dt>
                <dd>
                  <input type="text" className="form-control" />
                </dd>
                <dt>Password</dt>
                <dd>
                  <input type="password" className="form-control" />
                </dd>
              </dl>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

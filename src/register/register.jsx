export function Register() {
  return (
    <div className="display-center">
      <button
        data-bs-target="#register"
        data-bs-toggle="modal"
        className="btn btn-primary mt-8"
      >
        Register
      </button>
      <div className="modal fade" id="register">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="bi bi-person-fill"> User Regsiter </h2>
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
              <button className="btn btn-primary">Register</button>
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

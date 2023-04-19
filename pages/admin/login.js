import Image from "next/image";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card bg-white shadow-lg">
                <div className="card-body p-8 text-left">
                  <form>
                    <div className="text-center">
                      <Image src="/next.svg" width="200" height="200" alt="login" />
                    </div>
                    <div className="mb-3">
                      <label class="form-label ">
                       Username
                      </label>
                      <input
                        class="form-control borde"
                        id="username"
                        placeholder="Your username"
                      />
                    </div>
                    <div className="mb-3">
                      <label class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="*******"
                      />
                    </div>
      
                    <div className="d-grid">
                      <button className="btn btn-outline-dark" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

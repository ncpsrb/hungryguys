import Link from "next/link";
import Image from "next/image";
export default function Product() {
  return (
    <div className="block">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card p-4 rounded-3 shadow-sm">
            <h4 className="my-0 fw-normal">Free</h4>
            <hr />
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-dark"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-4 rounded-3 shadow-sm">
            <h4 className="my-0 fw-normal">Free</h4>
            <hr />
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-dark"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-4 rounded-3 shadow-sm">
            <h4 className="my-0 fw-normal">Free</h4>
            <hr />
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-dark"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

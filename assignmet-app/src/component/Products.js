import React from "react";
import { Sdata, Wdata, Kdata } from "./Sdata";
import Main_Card from "./Main_Card";

const Products = () => {
  return (
    <>
      {/* <!-- content --> */}
      <div className="container-fluid mt-2">
        {/* <!-- mens products --> */}
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>
              Mens Products{" "}
              <button
                type="button"
                className="btn btn-sm btn-secondary float-end"
              >
                view All
              </button>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Sdata.map(function card(value) {
                return (
                  <Main_Card
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    del={value.del}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>
              womens Products{" "}
              <button
                type="button"
                className="btn btn-sm btn-secondary float-end"
              >
                view All
              </button>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Wdata.map(function card(value) {
                return (
                  <Main_Card
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    del={value.del}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* <!-- kids products --> */}
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>
              Kids Products{" "}
              <button
                type="button"
                className="btn btn-sm btn-secondary float-end"
              >
                view All
              </button>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Kdata.map(function card(value) {
                return (
                  <Main_Card
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    del={value.del}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

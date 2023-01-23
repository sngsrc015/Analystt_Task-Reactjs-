import React, { useEffect, useMemo, useState } from "react";
import "../App.css";

function ArtisyAi() {
  const [show, setShow] = React.useState(false);
  const [ind, setInd] = React.useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [Data, setData] = useState([]);

  const[prev,setPrev] = useState();
  const[last,setLast] = useState();

  let PageSize = 4;
  async function FetchData() {

    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await resp.json();
    setData(result);
  }

  useEffect(() => {
    FetchData();
  }, []);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    setPrev(firstPageIndex)
    const lastPageIndex = firstPageIndex + PageSize;
    setLast(lastPageIndex)
  
  }, [currentPage]);

  function HandleDetails(item, index) {
    setInd(index);
   setShow(p=>!p)}
    

  const onNext = () => {
    setCurrentPage((p) => p + 1);
  };

  const onPrevious = () => {

    setCurrentPage((p) => p - 1);
  };

  function Pagination(i) {
    setCurrentPage(i);
  }
  return (
    <div className="container  box">
      <div className="">
        {Data.slice(prev,last).map((item, index) => {
          return (
            <div
              className={index === ind && show ? "row com" : "row col"}
              key={item.id}
            >
              <div className="row" style={{}}>
                <div className="col-sm sub">{item.company.name}</div>
                <div className="col-sm">
                  <div className="title">Contact</div>

                  <div className="sub">{item.name}</div>
                </div>

                <div className="col-sm">
                  <div className="title">City</div>

                  <div className="sub">{item.address.city}</div>
                </div>

                <div className="col-sm">
                  <div className="title">State</div>

                  <div className="sub">{item.address.street}</div>
                </div>
                <div className="col-sm-1">
                  <div
                    className="btn"
                    onClick={() => HandleDetails(item, index)}
                  >
                    {index === ind && show ? "Hide details" : "View details"}
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////////description////////////////////// */}
              {index === ind && show ? (
                <>
                  <div className="row">
                    <div>
                      <div className="title">Description</div>

                      <div className="sub">
                        Providing service of domestic flight booking @ lowest
                        price guaranteed and also for railway e ticket booking
                        also offering international flight tickets, giving
                        services to our customers since 1995 now going to start
                        hajj and umrah very soon for our valuable customers it
                        will be also @very affordable prices.
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <div className="title">Contact Person</div>

                      <div className="sub">{item.name}</div>
                    </div>
                    <div className="col-md">
                      <div className="title">Address</div>

                      <div className="sub">
                        {item.address.street} {item.address.suite}{" "}
                        {item.address.city} {item.address.zipcode}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <div className="title">Designation </div>

                      <div className="sub">Proprietor </div>
                    </div>

                    <div className="col-md">
                      <div className="title">City </div>

                      <div className="sub">{item.address.city} </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <div className="title">Emails </div>

                      <div className="sub">{item.email} </div>
                    </div>

                    <div className="col-md">
                      <div className="title">State </div>

                      <div className="sub">{item.address.street}</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <div className="title">Phones </div>

                      <div className="sub">{item.phone} </div>
                    </div>

                    <div className="col-md">
                      <div className="title">Country </div>

                      <div className="sub">India</div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        className="row"
        style={{
          justifyContent: "center",
          padding: "12px",
          alignItems: "center",
        }}
      >
        <nav aria-label="...">
          <ul
            className={currentPage === 1 ? "pagination disabled" : "pagination"}
          >
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              onClick={() => onPrevious()}
            >
              Prev
            </a>
            {Array.from([1, 2, 3]).map((item, i) => {
              return (
                <li
                  className={
                    item === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => Pagination(item)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}

            <li
              className={
                currentPage === 3 ? "page-item disabled" : "page-item disable"
              }
            >
              <a className="page-link" href="#" onClick={() => onNext()}>
                Next{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ArtisyAi;

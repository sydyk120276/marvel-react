import React from 'react'

const Header = ({ onChange }) => {

const handlerNameChange = (e) => {
  onChange(e.target.value)
}

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            href="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
            className="navbar-brand"
          >
            Marvel
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Поиск"
              aria-label="Search"
              onChange={handlerNameChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Все
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header

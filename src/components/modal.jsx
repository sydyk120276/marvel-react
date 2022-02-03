import React from 'react'

const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style="display: none;"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Человек паук
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                style="max-width: 100%"
                alt="изображение Человек паук"
              />

              <div>
                <p className="text-muted">2020-07-21T10:30:10-0400</p>
                <h5>Описание:</h5>
                <p>
                  Укушенный радиоактивным пауком, старшеклассник Питер Паркер
                  обрел скорость, силу и силу паука. Приняв имя Человек-паук,
                  Питер надеялся начать карьеру, используя свои новые
                  способности. Наученный тому, что с большой силой приходит
                  большая ответственность, Паук поклялся использовать свои силы,
                  чтобы помогать людям.
                </p>
                <h5>Комиксы:</h5>
                <ul>
                  <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1 </li>
                  <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1 </li>
                  <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1 </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary  btn-sm"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal

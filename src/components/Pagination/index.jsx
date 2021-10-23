import React from "react";

const MAX_ITEMS = 9; // máximo de botoes na paginação
const MAX_LEFT = (MAX_ITEMS - 1) / 2; // numero de botoes maximo a esquerda

//limit - quant de itens por página
//total - total de itens
//offset - skip - pula os itens da pág anterior
export const Pagination = ({ limit, total, offset ,setOffset}) => {
  const current = offset ? offset / limit + 1 : 1; // numero da pagina atual
  const pages = Math.ceil(total / limit); // numero total de págs - math.ceil - arredonda para cima
  const first = Math.max(current - MAX_LEFT, 1); //math.max encontra o valor mais entre um valor e outro

  const onPageChange = (page) => {
    setOffset((page - 1) * limit);
  };
  return (
    <div>
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={page === current ? "pagination__item--active" : null}
              >
                {page}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            Próxima
          </button>
        </li>
      </ul>
    </div>
  );
};

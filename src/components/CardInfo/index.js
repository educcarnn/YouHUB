export const itemCart = (item) => {
    return (
      <li key={item.id} className="Li-Name">
        <h3 className="h3-name">{item.title}</h3>
        <span className="span-name">{item.status}</span>
        <button>
          Remover
        </button>
      </li>
    );
  };

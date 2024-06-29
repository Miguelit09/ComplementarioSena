export const search = async (nombre) => {
    const response = await fetch(`http://127.0.0.1:3000/usuarios?nombre=${nombre}`);
    const usuario = await response.json();
    return usuario;
}

const fetchAsignacion = async (id) => {
    const response = await fetch(`http://127.0.0.1:3000/asignaciones?id=${id}`);
    const data = await response.json();
    return data;
};

export const asignaciones = (ids, callback) => {
    const promises = ids.map(fetchAsignacion);

    Promise.all(promises)
        .then(results => callback(null, results))
        .catch(error => callback(error, null));
};
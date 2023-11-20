const useDelete = () => {
    const deleteItem = (url, id) => {
        return fetch(url + id, {
            method: 'DELETE'
        }).then(() => console.log('was delete'))

    }
    return { deleteItem }
}

export default useDelete;
const useUpdate = () => {
    const update = (url, id,data) => {
        return fetch(url+id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
    return { update }
}

export default useUpdate;

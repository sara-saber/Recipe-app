
const usePost = () => {
    
  const post =(url,data) => {
      return  fetch(url,
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(() => console.log('was added'))
    }
    return {post}
}

export default usePost;
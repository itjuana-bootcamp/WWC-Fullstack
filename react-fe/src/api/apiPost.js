const URL_SERVER = "http://localhost:5000/post/";

export const getAllPost = async () => {
  try {
    const res = await fetch(URL_SERVER);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getPostById = async (id) => {
  try {
    const res = await fetch(URL_SERVER + id);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post) => {
  try {
    const res = await fetch(URL_SERVER, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (id, post) => {
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      //body: JSON.stringify(post),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const { REACT_APP_API_URI, REACT_APP_TOKEN } = process.env;
const TOKEN = JSON.parse(localStorage.getItem("token")) || REACT_APP_TOKEN;

export const postNewExam = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", TOKEN && TOKEN);
  const requestOptions = {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify(body),
  };
  console.log(body);

  try {
    const res = await fetch(`${REACT_APP_API_URI}/exams/start`, requestOptions);
    console.log(res);
    if (res.ok) {
      console.log(res);
      const data = await res.json();
      return data;
    } else {
      console.log("there was a problem starting the exam");
      return undefined;
    }
  } catch (err) {
    console.log(err);
    console.log("there was a problem starting the exam");
    return undefined;
  }
};

export const getExamById = async (id) => {
  try {
    const res = await fetch(`${REACT_APP_API_URI}/exams/` + id);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log("there was a problem starting the exam");
      return undefined;
    }
  } catch (err) {
    console.log(err);
    console.log("there was a problem starting the exam");
    return undefined;
  }
};

export const postAnswer = async (id, body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", TOKEN && TOKEN);
  const requestOptions = {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify(body),
  };
  console.log(body);

  try {
    const res = await fetch(
      `${REACT_APP_API_URI}/exams/${id}/answer`,
      requestOptions
    );
    console.log(res);
    if (res.ok) {
      console.log(res);
    } else {
      console.log("there was a problem submitting the answer");
      return undefined;
    }
  } catch (err) {
    console.log(err);
    console.log("there was a problem submitting the answer");
    return undefined;
  }
};

export const getScore = async (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", TOKEN && TOKEN);
  const requestOptions = {
    headers: myHeaders,
    method: "GET",
  };

  try {
    const res = await fetch(
      `${REACT_APP_API_URI}/exams/${id}/score`,
      requestOptions
    );
    console.log(res);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log("there was a problem with the exam");
      return undefined;
    }
  } catch (err) {
    console.log(err);
    console.log("there was a problem with the exam");
    return undefined;
  }
};

export const login = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const res = await fetch(`${REACT_APP_API_URI}/users/login`, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify(body),
    });
    if (res.ok) {
      console.log(res);
      const data = await res.text();
      console.log(data);
      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", token && token);

  try {
    const res = await fetch(`${REACT_APP_API_URI}/users/me`, {
      headers: myHeaders,
      method: "GET",
    });
    if (res.ok) {
      const data = await res.json();

      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};
